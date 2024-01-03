import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'

const index = () => {
  return (
    <Layout>
      <section className='w-full flex items-center justify-center h-[50vh]'>
        <h1 className='text-3xl font-secondary font-bold text-primary'>Página no encontrada</h1>
      </section>
      <HeadProvider>
        <Title>WOM Latam - Inversiones</Title>
      </HeadProvider>
    </Layout>
  )
}

export default index
