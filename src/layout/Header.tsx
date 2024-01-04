import { Link, useLocation } from 'wouter'
import Nav from './Nav'
import Topmenu from './Topmenu'
import Logo from '../assets/images/logo.svg'

const Header = () => {
  const [location] = useLocation()

  return (
    <div className='w-full'>
      <div className='max-w-6xl m-auto px-6 flex justify-between'>
        <div className='bg-white pb-6 lg:pb-0 pt-4 px-10 lg:px-14 absolute'>
          <Link href={`${location === '/' ? '#hero' : '/'}`}>
            <a className={`${location === '/' ? 'scroll' : ''}`}>
              <img
                src={Logo}
                alt='Logo'
                className='w-24 lg:w-auto hover:opacity-75 transition-all'
              />
            </a>
          </Link>
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
