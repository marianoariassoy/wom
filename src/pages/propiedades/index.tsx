import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { HeadProvider, Title } from 'react-head'
import Contacto from '../home/Contacto'
import Form from './Search'
import Item from './Item'
import { SocaloBottom } from '../../ui'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { data, loading } = useFetch(`/propiedades`)
  const { filterCity, filterPrice } = useDataContext()
  let dataFiltered = []

  if (data) {
    dataFiltered = data.filter(
      item =>
        (item.city.toLowerCase().includes(filterCity.toLowerCase()) || filterCity == '0') &&
        (item.price <= filterPrice || filterPrice == 0)
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='mt-20 fade-in'>
        <div className='w-full mx-auto max-w-6xl px-6'>
          <Form />
          {loading ? (
            <div className='w-full'>
              <Loader />
            </div>
          ) : (
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
              {dataFiltered.map(item => (
                <Item
                  key={item.id}
                  data={item}
                />
              ))}
            </div>
          )}
          {!loading && dataFiltered.length === 0 && (
            <div className='text-center font-medium'>No se encontraron propiedades.</div>
          )}
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
