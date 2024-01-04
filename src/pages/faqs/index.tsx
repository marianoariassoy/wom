import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import { SocaloBottom } from '../../ui'
import { DownBig } from '../../icons'
import ItemFaqs from './ItemFaqs'
import Contacto from '../home/Contacto'
import Newsletter from '../home/Newsletter'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = [
    {
      title: '¿Puedo invertir aunque no sea ciudadano ni residente de Estados Unidos?',
      text: 'No es necesario. (En la gran mayoría de los casos) Puedes invertir desde la comodidad de tu hogar. Toda la documentación necesaria puede suscribirse por vía electrónica.'
    },
    {
      title: '¿Puedo invertir aunque no sea ciudadano ni residente de Estados Unidos?',
      text: 'No es necesario. (En la gran mayoría de los casos) Puedes invertir desde la comodidad de tu hogar. Toda la documentación necesaria puede suscribirse por vía electrónica.'
    },
    {
      title: '¿Puedo invertir aunque no sea ciudadano ni residente de Estados Unidos?',
      text: 'No es necesario. (En la gran mayoría de los casos) Puedes invertir desde la comodidad de tu hogar. Toda la documentación necesaria puede suscribirse por vía electrónica.'
    },
    {
      title: '¿Puedo invertir aunque no sea ciudadano ni residente de Estados Unidos?',
      text: 'No es necesario. (En la gran mayoría de los casos) Puedes invertir desde la comodidad de tu hogar. Toda la documentación necesaria puede suscribirse por vía electrónica.'
    },
    {
      title: '¿Puedo invertir aunque no sea ciudadano ni residente de Estados Unidos?',
      text: 'No es necesario. (En la gran mayoría de los casos) Puedes invertir desde la comodidad de tu hogar. Toda la documentación necesaria puede suscribirse por vía electrónica.'
    }
  ]
  return (
    <Layout>
      <section className='h-[33vh] relative'>
        <div className='absolute bottom-0 w-full'>
          <div className='w-full m-auto max-w-6xl px-6'>
            <SocaloBottom color='bg-gray'> </SocaloBottom>
          </div>
        </div>
        <img
          src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='w-full h-full object-cover object-center'
        />
      </section>

      <section className='bg-gray'>
        <div className='w-full m-auto max-w-6xl px-6'>
          <div className='flex flex-col gap-y-6 items-center mb-12'>
            <h1 className='text-2xl lg:text-3xl text-secondary font-secondary font-bold'>FAQs</h1>
            <div className='text-black/25'>
              <DownBig />
            </div>
          </div>

          <div className='w-full flex flex-col gap-y-3 lg:px-12 pb-20'>
            {data.map((item, index) => (
              <ItemFaqs
                key={index}
                data={item}
              />
            ))}
          </div>

          <SocaloBottom color='bg-tertiary'> </SocaloBottom>
        </div>
      </section>

      <Newsletter />
      <Contacto />

      <HeadProvider>
        <Title>WOM Latam - FAQs</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
