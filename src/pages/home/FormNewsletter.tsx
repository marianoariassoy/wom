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
        <div className='text-xl font-bold  font-secondary text-center text-primary'>
          Muchas gracias por suscribirse.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-3'>
            <div>
              <div className='font-bold text-sm my-3 uppercase pl-3'>Por Email</div>
              <Input
                type='email'
                placeholder='Por Email'
                style='w-full lg:w-1/2'
                register={register('email')}
              />
            </div>
            <div>
              <div className='font-bold text-sm my-3 uppercase pl-3'>Por WhatsApp</div>
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
                  register={register('cod-area')}
                />
                <Input
                  type='text'
                  style='grow basis-0 lg:w-80 lg:grow-0 lg:basis-auto'
                  placeholder='Número'
                  register={register('phone')}
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
