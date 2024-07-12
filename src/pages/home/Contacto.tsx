import { useState } from 'react'
import axios from 'axios'
import { Input, Button, Textarea, Select } from '../../ui'
import { useForm } from 'react-hook-form'
import BeatLoader from 'react-spinners/BeatLoader'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { Close } from '../../components/icons'

interface Inputs {
  oportunidad: string
  name: string
  phone: string
  email: string
  message: string
}

const Contacto = () => {
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
      from_name: 'WOM Latam'
    }

    axios.post('https://wom-latam.com/backend/send-email-contacto.php', { ...data, phone, ...sender }).then(data => {
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

  const options = [
    'Suscribirme al newsletter',
    'Solicitar reunión',
    'Miami',
    'Orlando',
    'Baltimore',
    'Birmingham',
    'Fondo de inversión (R. Variable)',
    'Otros mercados',
    'Fondo de inversión (R. Fija)',
    'Hipotecas',
    'Storage',
    'Otras consultas'
  ]

  return (
    <section
      id='contacto'
      className='text-white bg-primary'
    >
      {sended && (
        <div
          className='fixed fade-in top-0 w-screen h-screen bg-black/20 flex justify-center items-center z-50'
          onClick={() => setSended(false)}
        >
          <div className='relative shadow-md font-bold text-center bg-white text-black max-w-md p-12 rounded-lg m-auto'>
            <button
              className='absolute top-4 right-4 hover:opacity-70'
              onClick={() => setSended(false)}
            >
              <Close />
            </button>
            ¡Su mensaje fue enviado! <br /> Gracias por contactarte con nosotros.
          </div>
        </div>
      )}
      <div className='w-full m-auto max-w-6xl pb-16 px-6 flex flex-col-reverse lg:flex-row gap-6 pt-20'>
        <div className='col lg:w-3/5 lg:pl-20'>
          <div className='row'>
            {error ? (
              <div className='text-xl font-bold '>Se produjo un error al enviar el mensaje</div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-y-3'>
                  <div>
                    <Select
                      register={register('subject', { required: true })}
                      name='Selecciona motivo del contacto'
                      options={options}
                    />
                    {errors.subject && <Error />}
                  </div>
                  <div>
                    <Input
                      type='text'
                      style='w-full'
                      placeholder='Nombre'
                      register={register('name', { required: true })}
                    />
                    {errors.name && <Error />}
                  </div>
                  <div>
                    <Input
                      type='text'
                      style='w-full'
                      placeholder='Apellido'
                      register={register('lastname', { required: true })}
                    />
                    {errors.name && <Error />}
                  </div>
                  <div>
                    <div className='font-bold text-sm mb-3 pl-3'>Número telefónico</div>
                    <div className='flex gap-3 items-start flex-wrap'>
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
                        register={register('codArea')}
                      />
                      <Input
                        type='text'
                        style='grow basis-0'
                        placeholder='Número'
                        register={register('phoneNumber', { required: true })}
                      />
                      {errors.phoneNumber && <Error />}
                    </div>
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
                    <Textarea
                      placeholder='Mensaje'
                      register={register('message', { required: true })}
                    />
                    {errors.message && <Error />}
                  </div>
                  <div className='flex justify-between items-center gap-x-6'>
                    <div className='flex items-center gap-x-3'>
                      <Input
                        type='checkbox'
                        placeholder=''
                        style='bg-transparent w-6 h-6 border border-white rounded-md'
                        register={register('suscribe')}
                      />
                      <div className='text-sm'>
                        Suscribirme para estar al día con las mejores oportunidades de inversión
                      </div>
                    </div>
                    <div className='w-32'>
                      {sending ? <BeatLoader className='mt-6' /> : <Button color='bg-secondary-dark'>Enviar</Button>}
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className={`col lg:w-2/5 lg:px-12 ${sended ? 'hidden' : ''}`}>
          <p className='mb-3 text-xl'>
            Queremos que inviertas bien informado y así obtengas la máxima rentabilidad en la compra de tus bienes
            raíces.
          </p>
          <p className='mb-3'>
            Contáctanos completando el formulario para resolver tus dudas y orientarte hacia una inversión inteligente.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contacto
