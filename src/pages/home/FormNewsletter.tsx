import { useState } from 'react'
import axios from 'axios'
import { Input, Button } from '../../ui'
import { useForm } from 'react-hook-form'
import BeatLoader from 'react-spinners/BeatLoader'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

interface Inputs {
  email: string
  phone: string
}

const FormNewsletter = () => {
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [phone, setPhone] = useState('')

  const { register, handleSubmit } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)
    const sender = {
      to: ' ',
      from: ' ',
      from_name: 'WOM Latam',
      subject: 'Suscripción'
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

  return (
    <div className='row'>
      {error ? (
        <div className='text-xl font-bold font-secondary text-center text-primary'>
          Se produjo un error al enviar el mensaje
        </div>
      ) : sended ? (
        <div className='text-xl font-bold font-secondary text-center text-primary'>Muchas gracias por suscribirse.</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex gap-x-3 justify-between items-end lg:items-start'>
            <div className='col grid lg:grid-cols-2 gap-3 grow'>
              <div>
                <Input
                  type='email'
                  placeholder='Por Email'
                  register={register('email')}
                />
              </div>
              <div>
                <PhoneInput
                  defaultCountry='ar'
                  value={phone}
                  onChange={phone => setPhone(phone)}
                  className='w-full'
                  placeholder='Por Whatsapp'
                />
              </div>
            </div>
            <div className='w-48 flex justify-center'>
              {sending ? <BeatLoader className='mt-6' /> : <Button color='bg-primary'>Suscribirse</Button>}
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default FormNewsletter
