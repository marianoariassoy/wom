import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import Casosdeexito from './Casosdeexito'
import Contacto from './Contacto'
import Destacadas from './Destacadas'
import Guia from './Guia'
import Hero from './Hero'
import Inversiones from './Inversiones'
import Newsletter from './Newsletter'
import Nosotros from './Nosotros'
import Porqueinvertir from './Porqueinvertir'
import Reuniones from './Reuniones'

const index = () => {
  return (
    <Layout>
      <Hero />
      <Destacadas />
      <Porqueinvertir />
      <Nosotros />
      <Inversiones />
      <Guia />
      <Reuniones />
      <Casosdeexito />
      <Newsletter />
      <Contacto />
      <HeadProvider>
        <Title>WOM Latam</Title>
      </HeadProvider>
    </Layout>
  )
}

export default index
