import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import Newsletter from '../home/Newsletter'
import Contacto from '../home/Contacto'

const index = () => {
  return (
    <Layout>
      <Newsletter />
      <Contacto />
      <HeadProvider>
        <Title>WOM Latam - Contacto</Title>
      </HeadProvider>
    </Layout>
  )
}

export default index
