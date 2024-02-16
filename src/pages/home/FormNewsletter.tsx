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

const FormNewsletter = () => {
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

    axios.post('https://marianoarias.soy/sites/wom-backend/api/suscripciones', { ...data, phone }).then(data => {
      if (data.data.success === true) {
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
    <section>
      {error ? (
        <div className='text-xl font-bold font-secondary text-center text-primary'>
          Se produjo un error al enviar el mensaje
        </div>
      ) : sended ? (
        <div className='text-xl font-bold font-secondary text-center text-primary'>Muchas gracias por suscribirse.</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-3 w-3/4 m-auto'>
            <div className='row flex flex-col lg:flex-row gap-3 w-full'>
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
            <div className='row w-full'>
              <div className='font-bold text-sm my-3'>Número de WhatsApp</div>
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
              <div className='inline-block'>
                {sending ? <BeatLoader className='mt-6' /> : <Button color='bg-primary'>Suscribirse</Button>}
              </div>
            </div>
          </div>
        </form>
      )}
    </section>
  )
}

export default FormNewsletter
