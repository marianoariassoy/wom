import { useState } from 'react'
import axios from 'axios'
import { Input, Button, Textarea, Select } from '../../ui'
import { useForm } from 'react-hook-form'
import BeatLoader from 'react-spinners/BeatLoader'

interface Inputs {
  oportunidad: string
  name: string
  phone: string
  email: string
  message: string
}

const FormContacto = () => {
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)
    const sender = {
      to: ' ',
      from: ' ',
      from_name: 'WOM Latam',
      subject: 'Contacto'
    }

    axios.post('', { ...data, ...sender }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const oportunidadOptions = ['Cotización', 'Revisión', 'Inversión', 'Cotización y Revisión']

  const Error = () => {
    return <div className='text-sm mt-2'>Por favor complete este campo</div>
  }

  return (
    <div className='row'>
      {error ? (
        <div className='text-xl font-bold font-secondary text-center'>Se produjo un error al enviar el mensaje</div>
      ) : sended ? (
        <div className='text-xl font-bold font-secondary text-center'>
          ¡Su mensaje fue enviado! Gracias por contactarte con nosotros.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-y-3'>
            <div>
              <Select
                register={register('oportunidad', { required: true })}
                name='Oportunidad de Inversión'
                options={oportunidadOptions}
              />
              {errors.oportunidad && <Error />}
            </div>
            <div>
              <Input
                type='text'
                placeholder='Nombre y Apellido'
                register={register('name', { required: true })}
              />
              {errors.name && <Error />}
            </div>
            <div>
              <Input
                type='text'
                placeholder='Teléfono de contacto'
                register={register('phone', { required: true })}
              />
              {errors.phone && <Error />}
            </div>
            <div>
              <Input
                type='email'
                placeholder='Email'
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
            <div className='flex justify-end'>
              <div className='w-32'>
                {sending ? <BeatLoader className='mt-6' /> : <Button color='bg-secondary-dark'>Enviar</Button>}
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default FormContacto
