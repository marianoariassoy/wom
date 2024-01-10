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
      to: ' ',
      from: ' ',
      from_name: 'WOM Latam',
      subject: 'Solicitud de Reunión'
    }

    axios.post('', { ...data, phone, ...sender }).then(data => {
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
        <span className='text-xl font-bold font-secondary'>
          ¡Su mensaje fue enviado! Gracias por contactarte con nosotros.
        </span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex gap-x-3 justify-between items-end lg:items-start'>
            <div className='col grid lg:grid-cols-3 gap-3 grow'>
              <div>
                <Input
                  type='text'
                  placeholder='Nombre y Apellido'
                  register={register('name', { required: true })}
                />
                {errors.name && <Error />}
              </div>
              <div>
                <PhoneInput
                  defaultCountry='ar'
                  value={phone}
                  onChange={phone => setPhone(phone)}
                  className='w-full'
                />
              </div>
              <div>
                <Input
                  type='email'
                  placeholder='Email'
                  register={register('email', { required: true })}
                />
                {errors.email && <Error />}
              </div>
            </div>
            <div className='flex justify-center w-52'>
              {sending ? <BeatLoader className='mt-6' /> : <Button color='bg-secondary-dark'>Solicitar Reunión</Button>}
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default FormReuniones
