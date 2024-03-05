import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import Contacto from '../home/Contacto'

const index = () => {
  return (
    <Layout>
      <Contacto />
      <HeadProvider>
        <Title>WOM Latam - Contacto</Title>
      </HeadProvider>
    </Layout>
  )
}

export default index
