import Form from './Form'
import Slider from './Slider'

const DetallesSeccion1 = () => {
  const data = [
    {
      id: 1,
      image: 'https://picsum.photos/200/300',
      title: 'Miami'
    },
    {
      id: 2,
      image: 'https://picsum.photos/200/300',
      title: 'Miami'
    },
    {
      id: 3,
      image: 'https://picsum.photos/200/300',
      title: 'Miami'
    }
  ]
  return (
    <section className='flex flex-col-reverse lg:flex-row gap-12 border-b border-gray pb-12'>
      <div className='lg:w-4/6 flex flex-col gap-y-6 overflow-hidden'>
        <Slider data={data} />

        <div className='text-sm text-gray'>
          Las imágenes expuestas corresponden a Unidades ya Entregadas. Las unidades se entregan similares a estas
          condiciones. Las unidades se entregan aptas para ser Rentadas
        </div>
      </div>
      <div className='lg:w-2/6 flex flex-col gap-y-3 '>
        <div className='flex justify-between items-center px-6 py-3 bg-primary text-white mb-3'>
          <span className='text-sm'>DESDE</span>
          <span className='font-medium text-xl'>USD 800.000</span>
        </div>
        <div className='border-b border-gray pb-3'>
          <h1 className='text-primary font-medium text-xl'>Baltimore</h1>
          <h2 className='text-xl'>156 S Kossuth St.</h2>
        </div>
        <div className='mb-3'>4 Bedrooms / 2 Bath / 1,400 Sf.</div>
        <Form />
      </div>
    </section>
  )
}

export default DetallesSeccion1
