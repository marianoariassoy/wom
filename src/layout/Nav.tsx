import { menu } from '../data'
import { Down } from '../icons'
import Submenu from './Submenu'

const Nav = () => {
  const OpenMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <nav className='lg:pt-10 flex items-center justify-end'>
      <ul className='hidden lg:flex items-center gap-x-5 [&>li:last-child]:border-0 [&>li:last-child]:p-0 font-medium text-sm pb-2'>
        {menu.map((data, index) =>
          index > 0 ? (
            <li className='border-r pr-5'>
              <a
                href={`#${data.title.toLowerCase().split(' ')[0]}`}
                key={index}
                className='hover:opacity-50 uppercase transition-colors scroll'
              >
                {data.title}
              </a>
            </li>
          ) : (
            <li className='border-r pr-5 show-submenu'>
              <a
                href={`#${data.title.toLowerCase().split(' ')[0]}`}
                key={index}
                className='hover:opacity-50 transition-colors uppercase flex items-center gap-x-2 scroll'
              >
                {data.title}
                <Down />
              </a>
              <Submenu />
            </li>
          )
        )}
      </ul>

      <div
        className='nav-menu lg:hidden text-black mt-6 mb-2'
        onClick={OpenMenu}
      >
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Nav
