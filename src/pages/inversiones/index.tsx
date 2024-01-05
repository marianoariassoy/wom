import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import { Pin } from '../../components/icons'
import Menu from './Menu'
import Contacto from '../home/Contacto'
import Newsletter from '../home/Newsletter'
import { SocaloBottom } from '../../ui'
import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import InversionesInfo from './InversionesInfo'

const Index = () => {
  const [path] = useLocation()
  const titleUrl = path.split('/')[2]
  const id = path.split('/')[3]
  const { data, loading } = useFetch(`/inversiones/${titleUrl}`)
  const color = path.split('/')[1] === 'renta-variable' ? 'text-secondary' : 'text-light'
  let title = 'Inversiones'

  if (!loading) {
    if (data?.length > 0) {
      title = data[0].title
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <header className='h-[33vh] relative'>
        <img
          src='https://marianoarias.soy/sites/wom-backend/images-static/inversiones.jpg'
          className='w-full h-full object-cover object-center'
        />
      </header>

      <section>
        <div className='w-full m-auto max-w-6xl px-6 flex flex-col lg:flex-row lg:gap-x-32 gap-y-12 items-start py-20'>
          <div className='col'>
            <Menu />
          </div>

          <div className='col'>
            {loading ? (
              <Loader />
            ) : data ? (
              <section className='flex flex-col gap-6'>
                <div className='flex gap-x-3 items-center text-2xl'>
                  <div className={color}>
                    <Pin />
                  </div>
                  <h1 className='font-secondary font-bold text-primary'>{title}</h1>
                </div>

                <InversionesInfo
                  id={id}
                  color={color}
                  title={title}
                />
              </section>
            ) : (
              <span className='font-secondary text-xl'>No se encontro la inversión</span>
            )}
          </div>
        </div>
      </section>

      <Slider id={id} />

      <section>
        <div className='w-full m-auto max-w-6xl px-6'>
          <SocaloBottom color='bg-tertiary'> </SocaloBottom>
        </div>
      </section>

      <Newsletter />
      <Contacto />

      <HeadProvider>
        <Title>WOM Latam - {title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
