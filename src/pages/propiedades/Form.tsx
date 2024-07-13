import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import BeatLoader from 'react-spinners/BeatLoader'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { Input, Button, Textarea } from '../../ui'
import { Whatsapp } from '../../components/icons'

interface Inputs {
  name: string
  email: string
}

const Contacto = ({ city, location }) => {
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [phone, setPhone] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)
    const sender = {
      to: 'informes@wom-latam.com',
      from: 'informes@wom-latam.com',
      from_name: 'WOM Latam',
      subject: `Consulta por ${city} ${location}`
    }

    axios.post('https://wom-latam.com/backend/send-email-propiedades.php', { ...data, phone, ...sender }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const Error = () => {
    return <div className='text-sm mt-2 text-secondary'>Por favor complete este campo</div>
  }

  return (
    <div className='row'>
      {error ? (
        <div className='font-medium text-xl text-primary'>Se produjo un error al enviar el mensaje.</div>
      ) : sended ? (
        <div className='font-medium text-xl text-primary'>¡Su consulta fue enviada!</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-y-4'>
            <div>
              <Input
                type='text'
                style='w-full'
                placeholder='Nombre y apellido'
                register={register('name', { required: true })}
              />
              {errors.name && <Error />}
            </div>
            <div>
              <Input
                type='email'
                placeholder='Email'
                style='w-full'
                register={register('email', { required: true })}
              />
              {errors.email && <Error />}
            </div>
            <div>
              <div className='w-full flex gap-x-2'>
                <PhoneInput
                  defaultCountry='ar'
                  value={phone}
                  onChange={phone => setPhone(phone)}
                  className='border border-gray rounded-2xl'
                />
                <Input
                  type='text'
                  placeholder='Cód.'
                  style='w-20'
                  register={register('codArea')}
                />
                <Input
                  type='text'
                  style='w-32'
                  placeholder='Número'
                  register={register('phoneNumber', { required: true })}
                />
              </div>
              {errors.phoneNumber && (
                <div>
                  <Error />
                </div>
              )}
            </div>
            <div className='flex justify-between items-center gap-x-6'>
              <div className='flex items-center gap-x-3'>
                <Input
                  type='checkbox'
                  placeholder=''
                  style='bg-transparent w-6 h-6 border border-white rounded-md'
                  register={register('suscribe')}
                />
                <div className='text-sm'>Suscribirme para estar al día con las mejores oportunidades de inversión</div>
              </div>
            </div>
            <div>
              <Textarea
                placeholder='¡Hola! Quiero que se comuniquen conmigo por esta propiedad.'
                register={register('message', { required: true })}
              />
              {errors.message && <Error />}
            </div>
            <div className='flex gap-x-6 items-center justify-between'>
              {sending ? <BeatLoader className='mt-3' /> : <Button color='bg-secondary-dark'>CONSULTAR</Button>}

              <a
                href='https://wa.me/19546690141'
                target='_blank'
                rel='noreferrer'
                className='text-white rounded-2xl px-6 h-14 font-medium text-sm hover:bg-black transition-colors flex justify-center items-center bg-whatsapp gap-x-2'
              >
                CHATEAR
                <Whatsapp />
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default Contacto
