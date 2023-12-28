import Social from './Social'
import { Whatsapp } from '../icons'

const Topmenu = () => {
  return (
    <div className='bg-primary flex items-center gap-x-20 justify-end h-11 text-sm'>
      <div className='flex gap-x-12'>
        <a
          href='tel:549110867777'
          className='text-light hover:text-white'
        >
          ARG 54911 0867777
        </a>
        <a
          href='tel:305624098'
          className='text-light hover:text-white'
        >
          USA 305 624098
        </a>
      </div>
      <div className='text-white mr-20'>
        <Social />
      </div>
      <a
        href='https://wa.me/549110867777'
        className='absolute text-white px-4 py-5 bg-whatsapp rounded-bl-xl transition-all hover:translate-y-1'
      >
        <Whatsapp />
      </a>
    </div>
  )
}

export default Topmenu
