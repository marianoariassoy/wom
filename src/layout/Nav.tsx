import { menu } from '../data/data'
import { Down } from '../icons'

const Nav = () => {
  return (
    <nav className='hidden lg:block pt-10 text-sm font-medium'>
      <ul className='flex gap-x-5 items-center justify-end [&>a:last-child]:border-0 [&>a:last-child]:p-0 '>
        {menu.map((data, index) => (
          <li className='border-r pr-5'>
            <a
              href={data.title}
              key={index}
              className='hover-underline-animation uppercase flex items-center gap-x-2'
            >
              {data.title}
              {index === 0 && <Down />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
