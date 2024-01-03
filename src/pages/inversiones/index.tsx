import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import { Pin, Check, Bull } from '../../icons'
import Menu from './Menu'
import Contacto from '../home/Contacto'
import Newsletter from '../home/Newsletter'
import { SocaloBottom } from '../../ui'
import Slider from './Slider'

const Index = () => {
  const [path] = useLocation()
  const color = path.split('/')[1] === 'renta-variable' ? 'text-secondary' : 'text-light'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = [
    {
      text: 'La presentación de los mercados e inversiones posibles'
    },
    {
      text: 'La selección de las unidades'
    },
    {
      text: 'Acompañamiento en todo el proceso de compra, administración y posterior venta'
    }
  ]

  return (
    <Layout>
      <header className='h-[33vh] relative'>
        <img
          src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='w-full h-full object-cover object-center'
        />
      </header>

      <section>
        <div className='w-full m-auto max-w-6xl px-6 flex flex-col lg:flex-row lg:gap-x-32 gap-y-12 items-start py-20'>
          <div className='col'>
            <Menu />
          </div>

          <div className='col flex flex-col gap-y-12'>
            <div className='flex gap-x-3 items-center text-2xl'>
              <div className={color}>
                <Pin />
              </div>
              <h1 className='font-secondary font-bold text-primary'>Hipotecas</h1>
            </div>

            <div className='flex flex-col gap-y-3 text-gray'>
              {data.map((item, index) => (
                <article
                  key={index}
                  className='flex gap-x-3 items-center'
                >
                  <div className={`text-xl ${color}`}>
                    <Check />
                  </div>
                  <div>{item.text}</div>
                </article>
              ))}
            </div>

            <div>
              <h1 className='font-secondary font-bold text-primary text-xl mb-6'> ¿Por qué invertir en Miami?</h1>
              <div className='flex flex-col gap-y-3 text-gray'>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className='flex gap-x-3 items-center'
                  >
                    <div className={`text-xl ${color}`}>
                      <Bull />
                    </div>
                    <div className='text-wrap'>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slider />

      <div>
        <div className='w-full m-auto max-w-6xl px-6'>
          <SocaloBottom color='bg-tertiary'> </SocaloBottom>
        </div>
      </div>

      <Newsletter />
      <Contacto />

      <HeadProvider>
        <Title>WOM Latam - Inversiones</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
