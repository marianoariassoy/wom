import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'

const index = () => {
  return (
    <Layout>
      <h1>Error</h1>
      <HeadProvider>
        <Title>WOM Latam - Inversiones</Title>
      </HeadProvider>
    </Layout>
  )
}

export default index
