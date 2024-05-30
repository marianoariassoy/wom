import { useState } from 'react'
import axios from 'axios'
import { Input, Button } from '../../ui'
import { useForm } from 'react-hook-form'
import BeatLoader from 'react-spinners/BeatLoader'

interface Inputs {
  name: string
  email: string
  message: string
}

const FormReuniones = () => {
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
    axios.post('https://wom-latam.com/backend/send-email-newsletter.php', { ...data }).then(data => {
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
        <div className='font-bold font-secondary mt-6'>Se produjo un error</div>
      ) : sended ? (
        <div className='font-bold font-secondary mt-6'>¡Su solicitud ha sido registrada!</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-3 items-start justify-start'>
            <div className='w-full'>
              <Input
                type='email'
                placeholder='E-mail'
                style='w-full border'
                register={register('email', { required: true })}
              />
              {errors.email && <Error />}
            </div>
            <div className='row w-full'>
              {sending ? <BeatLoader className='mt-6' /> : <Button color='bg-secondary'>SUSCRIBIRME</Button>}
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default FormReuniones
