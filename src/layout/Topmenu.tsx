import Social from './Social'
import { Whatsapp } from '../components/icons'

const Topmenu = () => {
  return (
    <div className='bg-primary items-center gap-x-20 justify-end h-11 text-sm flex'>
      <div className='gap-x-12 hidden lg:flex'>
        <a
          href='tel:5493515056688'
          className='text-light hover:text-white'
        >
          ARG +54 9 3515 05-6688
        </a>
        <a
          href='tel:19546690141'
          className='text-light hover:text-white'
        >
          USA +1 (954) 669-0141
        </a>
      </div>
      <div className='text-white mr-20'>
        <Social />
      </div>
      <a
        href='https://wa.me/19546690141'
        target='_blank'
        className='absolute text-white px-4 py-5 bg-whatsapp rounded-bl-xl transition-all hover:translate-y-1'
      >
        <Whatsapp />
      </a>
    </div>
  )
}

export default Topmenu
