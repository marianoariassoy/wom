import { Whatsapp } from '../../components/icons'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Nosotros = () => {
  const { data, loading } = useFetch(`/textos`)

  return (
    <section
      id='nosotros'
      className='bg-primary text-white'
    >
      <div className='w-full mx-auto max-w-6xl pt-12 px-6 flex flex-col lg:flex-row gap-x-6'>
        <div className='col lg:w-2/5 lg:pr-12'>
          <img
            src='https://wom-latam.com/backend/images-static/nosotros.jpg'
            alt='Imagen sobre nosotros'
            className='w-full'
          />
        </div>
        <div className='col lg:w-3/5 flex flex-col gap-y-6 pr-6 lg:pt-6'>
          <h1 className='text-white text-2xl lg:text-3xl font-bold'>Nosotros</h1>
          {loading ? (
            <Loader />
          ) : (
            <div className='flex flex-col gap-y-6'>
              <p className='text-wrap text-sm whitespace-break-spaces'>{data[0].text}</p>
              <p className='text-wrap text-light text-xl font-medium whitespace-break-spaces'>{data[0].text2}</p>
            </div>
          )}
        </div>
      </div>
      <div className='px-6 py-12 flex items-center justify-center gap-x-4'>
        <div className='text-white'>¡Consúltanos! Estamos para asesorarte</div>
        <a
          href='https://wa.me/19546690141'
          target='_blank'
          className=' text-white bg-whatsapp rounded-full transition-all h-14 text-xl aspect-square flex items-center justify-center shadow'
        >
          <Whatsapp />
        </a>
      </div>
    </section>
  )
}

export default Nosotros
