import { useState } from 'react'
import axios from 'axios'
import { Input, Button } from '../../ui'
import { useForm } from 'react-hook-form'
import BeatLoader from 'react-spinners/BeatLoader'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

interface Inputs {
  name: string
  email: string
  message: string
}

const FormReuniones = () => {
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
      subject: 'Solicitud de Reunión'
    }

    axios
      .post('http://marianoarias.soy/sites/wom-backend/send-email-reuniones.php', { ...data, phone, ...sender })
      .then(data => {
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
    return <div className='text-sm mt-2'>Por favor complete este campo</div>
  }

  return (
    <div className='row'>
      {error ? (
        <span className='text-xl font-bold font-secondary'>Se produjo un error al enviar el mensaje</span>
      ) : sended ? (
        <span className='text-xl font-bold font-secondary'>¡Su solicitud fue enviada con exito!</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-3 items-start justify-start'>
            <div className='row flex flex-col lg:flex-row gap-3 w-full lg:w-2/3'>
              <div>
                <Input
                  type='text'
                  placeholder='Nombre'
                  style='w-full'
                  register={register('name', { required: true })}
                />
                {errors.name && <Error />}
              </div>
              <div>
                <Input
                  type='text'
                  placeholder='Apellido'
                  style='w-full'
                  register={register('lastname', { required: true })}
                />
                {errors.lastname && <Error />}
              </div>
              <div>
                <Input
                  type='email'
                  style='w-full'
                  placeholder='Email'
                  register={register('email', { required: true })}
                />
                {errors.email && <Error />}
              </div>
            </div>
            <div className='row w-full lg:w-1/2'>
              <div className='font-bold text-sm my-3'>Número telefónico</div>
              <div className='flex gap-3 flex-wrap'>
                <PhoneInput
                  defaultCountry='ar'
                  value={phone}
                  onChange={phone => setPhone(phone)}
                  className='w-32'
                />
                <Input
                  type='text'
                  placeholder='Cód. Area'
                  style='w-28'
                  register={register('codArea', { required: true })}
                />
                <Input
                  type='text'
                  style='grow basis-0'
                  placeholder='Número'
                  register={register('phoneNumber', { required: true })}
                />
              </div>
            </div>
            <div className='row'>
              {sending ? <BeatLoader className='mt-6' /> : <Button color='bg-secondary-dark'>Solicitar Reunión</Button>}
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default FormReuniones
