import { useEffect } from 'react'
import { Link } from 'wouter'
import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import Search from './Search'
import DetallesSeccion1 from './DetallesSeccion1'
import DetallesSeccion2 from './DetallesSeccion2'
import DetallesSeccion3 from './DetallesSeccion3'
import { SocaloBottom } from '../../ui'

const Detalle = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='mt-20'>
        <div className='mx-auto max-w-6xl px-6'>
          <Search />
          <DetallesSeccion1 />
          <DetallesSeccion2 />
          <DetallesSeccion3 />
          <div className='flex justify-center my-20'>
            <Link
              to='/propiedades'
              className='text-white bg-secondary font-medium transition-all px-14 hover:bg-black rounded-2xl h-14 text-sm justify-center flex items-center'
            >
              VOLVER AL LISTADO
            </Link>
          </div>
          <div>
            <SocaloBottom color='bg-primary'> </SocaloBottom>
          </div>
        </div>
      </section>

      <HeadProvider>
        <Title>WOM Latam - Propiedades</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Detalle
