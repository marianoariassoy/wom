import { inversiones } from '../../data'
import { Link, useLocation } from 'wouter'
import { sanitizeTitleForURL } from '../../utils'

const Menu = () => {
  const [path] = useLocation()

  return (
    <section className='col flex lg:flex-col gap-x-6 gap-y-12 text-sm'>
      <article>
        <h2 className='font-semibold p-4 bg-secondary text-white w-full lg:w-64 lg:px-12 mb-6'>RENTA VARIABLE</h2>
        <nav className='flex flex-col gap-y-3 uppercase text-gray font-medium'>
          {inversiones.variables.map((data, index) => (
            <Link
              href={`/renta-variable/${sanitizeTitleForURL(data.title)}`}
              key={index}
            >
              <a
                className={`${
                  sanitizeTitleForURL(data.title) === path.split('/')[2] && 'text-secondary'
                } text-secondary-hover`}
              >
                {data.title}
              </a>
            </Link>
          ))}
        </nav>
      </article>
      <article>
        <h2 className='font-semibold p-4 bg-light text-white w-full lg:w-64 lg:px-12 mb-6'>RENTA FIJA</h2>
        <nav className='flex flex-col gap-y-3 uppercase text-gray font-medium'>
          {inversiones.fijas.map((data, index) => (
            <Link
              href={`/renta-fija/${sanitizeTitleForURL(data.title)}`}
              key={index}
            >
              <a
                className={`${sanitizeTitleForURL(data.title) === path.split('/')[2] && 'text-light'} text-light-hover`}
              >
                {data.title}
              </a>
            </Link>
          ))}
        </nav>
      </article>
    </section>
  )
}

export default Menu
