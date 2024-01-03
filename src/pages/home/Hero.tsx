import { SocaloBottom } from '../../ui'
import { Whatsapp } from '../../icons'
import Slider from './Slider'

const Hero = () => {
  const data = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      title: 'Disfruta del presente resguardando tu futuro'
    },
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      title: 'Title 2'
    },
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      title: 'Title 3'
    }
  ]

  return (
    <section
      id='hero'
      className='relative h-[70vh]'
    >
      <Slider data={data} />

      <div className='fixed flex items-center gap-x-3 bottom-12 right-6 z-40'>
        <a
          href='https://wa.me/19546690141'
          className='bg-white py-3 px-6 text-gray text-sm rounded-full shadow hover:text-white bg-secondary-hover transition-colors'
        >
          Click aquí para chatear
        </a>
        <a
          href='https://wa.me/19546690141'
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
