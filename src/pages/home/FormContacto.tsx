import { useState } from 'react'
import axios from 'axios'
import { Input, Button, Textarea, Select } from '../../ui'
import { useForm } from 'react-hook-form'
import BeatLoader from 'react-spinners/BeatLoader'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import useFetch from '../../hooks/useFetch'

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
  const [phone, setPhone] = useState('')
  const { data: inversiones, loading: loadingInversiones } = useFetch(`/inversiones`)

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
                options={loadingInversiones ? [] : inversiones}
              />
              {errors.oportunidad && <Error />}
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
                  register={register('cod-area')}
                />
                <Input
                  type='text'
                  style='grow basis-0'
                  placeholder='Número'
                  register={register('phone')}
                />
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
