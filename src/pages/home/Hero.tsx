import { SocaloBottom } from '../../ui'
import { Whatsapp } from '../../components/icons'
import Slider from './Slider'
import useFetch from '../../hooks/useFetch'

const Hero = () => {
  const { data, loading } = useFetch(`/portada`)

  return (
    <section
      id='hero'
      className='relative h-[50vh] lg:h-[70vh]'
    >
      {!loading && <Slider data={data} />}

      <div className='fixed flex items-center gap-x-3 bottom-12 right-6 z-40'>
        <a
          href='https://wa.me/19546690141'
          target='_blank'
          className='bg-white py-3 px-6 text-gray text-sm rounded-full shadow hover:text-white transition-colors hover:bg-black'
        >
          Click aquí para chatear
        </a>
        <a
          href='https://wa.me/19546690141'
          target='_blank'
          className=' text-white bg-whatsapp rounded-full transition-all h-14 text-xl aspect-square flex items-center justify-center shadow'
        >
          <Whatsapp />
        </a>
      </div>

      <div className='absolute w-full bottom-0 z-10'>
        <div className='max-w-6xl m-auto px-6'>
          <SocaloBottom color='bg-white'> </SocaloBottom>
        </div>
      </div>
    </section>
  )
}

export default Hero
