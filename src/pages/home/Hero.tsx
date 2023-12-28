import { SocaloBottom } from '../../ui'
import Slider from './Slider'

const Hero = () => {
  const data = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      alt: ''
    },
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      alt: ''
    },
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      alt: ''
    }
  ]
  return (
    <section
      id='hero'
      className='relative h-[70vh]'
    >
      <div className='absolute z-10 w-full h-full top-1/3'>
        <div className='m-auto max-w-6xl text-white font-secondary text-4xl text-right mt-8 font-bold'>
          Disfruta del presente <br /> resguardando tu futuro
        </div>
      </div>

      <Slider data={data} />

      <div className='absolute w-full bottom-0 z-10'>
        <div className='max-w-6xl m-auto'>
          <SocaloBottom color='bg-white' />
        </div>
      </div>
    </section>
  )
}

export default Hero
