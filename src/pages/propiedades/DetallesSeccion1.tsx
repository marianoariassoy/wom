import Form from './Form'
import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const DetallesSeccion1 = ({ item }) => {
  const { data, loading } = useFetch(`/imagenes/${item.id}`)

  const price = Number(item.price).toLocaleString('es-ES')

  return (
    <section className='flex flex-col-reverse lg:flex-row gap-12 border-b border-gray pb-12'>
      <div className='lg:w-4/6 flex flex-col gap-y-6 overflow-hidden'>
        {loading ? (
          <div className='w-full my-20'>
            <Loader />
          </div>
        ) : (
          <Slider data={data} />
        )}
      </div>
      <div className='lg:w-2/6 flex  flex-col gap-y-3'>
        <div className='flex justify-between items-center px-6 py-3 bg-primary text-white mb-3'>
          <span className='text-sm'>{item.subject}</span>
          <span className='font-medium text-xl'>USD {price}</span>
        </div>
        <div className='border-b border-gray pb-3  hidden lg:block'>
          <h1 className='text-primary font-medium text-xl'>{item.city}</h1>
          <h2 className='text-xl'>{item.location}</h2>
        </div>
        <div className='mb-3'>{item.amenities}</div>
        <Form
          city={item.city}
          location={item.location}
        />
      </div>
    </section>
  )
}

export default DetallesSeccion1
