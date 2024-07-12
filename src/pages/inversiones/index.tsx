import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import { Pin } from '../../components/icons'
import Menu from './Menu'
import Contacto from '../home/Contacto'
import { SocaloBottom } from '../../ui'
import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import InversionesInfo from './InversionesInfo'
import Image from '../../components/Image'

const Index = () => {
  const [path] = useLocation()
  const titleUrl = path.split('/')[2]
  const id = path.split('/')[3]
  const { data, loading, setLoading } = useFetch(`/inversiones/${titleUrl}`)
  const color = path.split('/')[1] === 'renta-variable' ? 'text-secondary' : 'text-light'
  let title = 'Inversiones'

  if (!loading) {
    if (data?.length > 0) {
      title = data[0].title
    }
  }
  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0)
  }, [path, setLoading])

  return (
    <Layout>
      <header className='h-[33vh] relative'>
        {!loading && (
          <Image
            src={data[0].image}
            alt={title}
          />
        )}
      </header>

      <section>
        <div className='w-full mx-auto max-w-6xl px-6 flex flex-col lg:flex-row lg:gap-x-32 gap-y-12 items-start py-20'>
          <div className='col'>
            <Menu />
          </div>

          <div className='col'>
            {loading ? null : data ? (
              <section className='flex flex-col gap-6'>
                <div className='flex gap-x-3 items-center text-2xl'>
                  <div className={color}>
                    <Pin />
                  </div>
                  <h1 className='font-bold text-primary'>{title}</h1>
                </div>
                <InversionesInfo
                  id={id}
                  color={color}
                  title={title}
                />
              </section>
            ) : (
              <span className='text-xl'>No se encontro la inversión</span>
            )}
          </div>
        </div>
      </section>

      <Slider id={id} />

      <section>
        <div className='w-full m-auto max-w-6xl px-6'>
          <SocaloBottom color='bg-primary'> </SocaloBottom>
        </div>
      </section>

      <Contacto />

      <HeadProvider>
        <Title>WOM Latam - {title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
