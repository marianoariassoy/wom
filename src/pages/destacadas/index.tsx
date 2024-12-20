import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import Contacto from '../home/Contacto'
import { SocaloBottom } from '../../ui'
import useFetch from '../../hooks/useFetch'
import Image from '../../components/Image'
import { Pdf } from '../../components/icons'
import Menu from './Menu'
import InversionesInfo from '../inversiones/InversionesInfo'
import Slider from './Slider'
import HTML from '../../hooks/useHTML'

const Index = () => {
  const id = useParams().id

  const { data, loading } = useFetch(`/destacadas/${id}`)
  let title = ''

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
        {!loading && (
          <Image
            src={data[0].image}
            alt={title}
          />
        )}
      </header>

      <section className='relative'>
        {!loading && <div className='absolute w-full lg:w-1/2 h-full bg-secondary -z-10'></div>}

        <div className='w-full m-auto max-w-6xl px-6 flex flex-col lg:flex-row gap-12'>
          <div className='col bg-secondary pt-20'>
            <Menu />
          </div>

          <div className='col py-12 lg:py-20 bg-white px-6 lg:pl-12 pb-6'>
            {loading ? null : data ? (
              <section className='flex flex-col gap-6'>
                <div className='text-2xl mb-3'>
                  <h1 className='font-bold text-primary'>{title}</h1>
                  <h2 className='font-bold text-gray'>{data[0].subtitle}</h2>
                </div>

                {data[0].bajada && (
                  <div className='text-gray'>
                    <HTML text={data[0].bajada} />
                  </div>
                )}

                <InversionesInfo
                  id={id}
                  color='text-primary'
                  title={title}
                />

                <div className='mb-3'>
                  <p className='font-bold text-gray whitespace-break-spaces'>{data[0].text}</p>
                </div>

                {data[0].pdf && (
                  <a
                    href={data[0].pdf}
                    target='_blank'
                    className='flex items-center'
                  >
                    <span className='bg-primary py-2 px-3 text-white font-medium text-sm hover:bg-black transition-colors'>
                      BROCHURE
                    </span>
                    <span className='bg-secondary p-3 rounded-md text-white'>
                      <span className='w-6 block'>
                        <Pdf />
                      </span>
                    </span>
                  </a>
                )}

                <Slider id={id} />
              </section>
            ) : (
              <span className='text-xl'>No se encontro la inversión</span>
            )}
          </div>
        </div>
      </section>

      <section>
        {!loading && <div className='absolute w-full lg:w-1/2 h-full bg-secondary -z-10'></div>}

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
