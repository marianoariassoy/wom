import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { HeadProvider, Title } from 'react-head'
import Contacto from '../home/Contacto'
import Form from './Search'
import Item from './Item'
import { SocaloBottom } from '../../ui'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = [
    {
      id: 1,
      title: 'Miami',
      description: 'THE FLATS',
      image: 'https://via.placeholder.com/400x300.png',
      price: 'USD 50.000',
      from: 'DESDE',
      tag: 1
    },
    {
      id: 2,
      title: 'Miami',
      description: 'THE FLATS',
      image: 'https://via.placeholder.com/400x300.png',
      price: 'USD 50.000',
      from: 'DESDE',
      tag: 1
    },
    {
      id: 3,
      title: 'Miami',
      description: 'THE FLATS',
      image: 'https://via.placeholder.com/400x300.png',
      price: 'USD 50.000',
      from: 'DESDE',
      tag: 1
    }
  ]

  return (
    <Layout>
      <section className='mt-20'>
        <div className='w-full mx-auto max-w-6xl px-6'>
          <Form />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {data.map(item => (
              <Item
                key={item.id}
                data={item}
              />
            ))}
          </div>
          <div className='mt-20'>
            <SocaloBottom color='bg-primary'> </SocaloBottom>
          </div>
        </div>
      </section>

      <Contacto />
      <HeadProvider>
        <Title>WOM Latam - Propiedades</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
