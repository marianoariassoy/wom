import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import Menu from './Menu'
import Contacto from '../home/Contacto'
import Newsletter from '../home/Newsletter'
import { SocaloBottom } from '../../ui'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import ItemOtrosMercados from './ItemOtrosMercados'
import Image from '../../components/Image'

const OtrosMercados = () => {
  const { data, loading } = useFetch(`/inversiones/otros-mercados`)

  return (
    <Layout>
      <header className='h-[33vh] relative'>
        {!loading && (
          <Image
            src={data[0].image}
            alt=''
          />
        )}
      </header>

      <section>
        <div className='w-full m-auto max-w-6xl px-6 flex flex-col lg:flex-row lg:gap-x-32 gap-y-12 items-start py-20'>
          <div className='col'>
            <Menu />
          </div>

          <div className='col flex flex-col gap-y-20'>
            {loading ? (
              <Loader />
            ) : (
              data.map(item => (
                <ItemOtrosMercados
                  key={item.id}
                  data={item}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section>
        <div className='w-full m-auto max-w-6xl px-6'>
          <SocaloBottom color='bg-tertiary'> </SocaloBottom>
        </div>
      </section>

      <Newsletter />
      <Contacto />

      <HeadProvider>
        <Title>WOM Latam - Otros Mercados</Title>
      </HeadProvider>
    </Layout>
  )
}

export default OtrosMercados
