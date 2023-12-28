import { useEffect } from 'react'
import scroll from '../utils/scroll'
import Nav from './Nav'
import Topmenu from './Topmenu'
import Logo from '../assets/images/logo.svg'

const Header = () => {
  useEffect(() => {
    scroll()
  }, [])

  return (
    <div className='w-full'>
      <div className='max-w-6xl m-auto px-6 flex justify-between'>
        <div className='bg-white pb-6 lg:pb-0 pt-4 px-10 lg:px-14 absolute'>
          <a href='#'>
            <img
              src={Logo}
              alt='Logo'
              className='w-24 lg:w-auto'
            />
          </a>
        </div>
        <div className='w-full'>
          <Topmenu />
          <Nav />
        </div>
      </div>
      <div className='w-full bg-primary h-11 -z-10 absolute top-0'></div>
    </div>
  )
}

export default Header
