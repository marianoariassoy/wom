import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import { Pin } from '../../icons'
import Menu from './Menu'
import Contacto from '../home/Contacto'
import Newsletter from '../home/Newsletter'
import { SocaloBottom } from '../../ui'
import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import ItemInfo from './ItemInfo'

const Index = () => {
  const [path] = useLocation()
  const title = path.split('/')[2]
  const id = path.split('/')[3]
  const { data, loading } = useFetch(`/inversiones/${title}`)
  const { data: info, loading: loadingInfo } = useFetch(`/inversiones/info/${id}`)
  const color = path.split('/')[1] === 'renta-variable' ? 'text-secondary' : 'text-light'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <header className='h-[33vh] relative'>
        <img
          src='http://localhost/sites/wom-backend/images-static/inversiones.jpg'
          alt='Imagen para inversiones'
          className='w-full h-full object-cover object-center'
        />
      </header>

      <section>
        <div className='w-full m-auto max-w-6xl px-6 flex flex-col lg:flex-row lg:gap-x-32 gap-y-12 items-start py-20'>
          <div className='col'>
            <Menu />
          </div>

          <div className='col flex flex-col gap-y-12'>
            {loading ? (
              <Loader />
            ) : (
              <section className='flex flex-col gap-6'>
                <div className='flex gap-x-3 items-center text-2xl'>
                  <div className={color}>
                    <Pin />
                  </div>
                  <h1 className='font-secondary font-bold text-primary'>{data[0].title}</h1>
                </div>

                {loadingInfo ? (
                  <Loader />
                ) : (
                  <div className='flex flex-col gap-y-3 text-gray'>
                    {info
                      .filter(item => item.type === 1)
                      .map((item, index) => (
                        <ItemInfo
                          key={index}
                          item={item}
                          color={color}
                        />
                      ))}
                  </div>
                )}

                {!loadingInfo && info.filter(item => item.type === 2).length > 0 && (
                  <div>
                    <h1 className='font-secondary font-bold text-primary text-xl mb-6'>
                      ¿Por qué invertir en {data[0].title}?
                    </h1>
                    <div className='flex flex-col gap-y-3 text-gray'>
                      {info
                        .filter(item => item.type === 2)
                        .map((item, index) => (
                          <ItemInfo
                            key={index}
                            item={item}
                            color={color}
                          />
                        ))}
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </section>

      <Slider id={id} />

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
