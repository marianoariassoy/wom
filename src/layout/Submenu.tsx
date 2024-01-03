import { Link, useLocation } from 'wouter'
import { inversiones } from '../data'
import { sanitizeTitleForURL } from '../utils'

const Submenu = () => {
  const [path] = useLocation()

  return (
    <div className='absolute text-sm bg-white p-6 pr-12 -ml-6 pt-10 hidden submenu'>
      <div className='flex flex-col gap-y-1 mb-6'>
        <h2 className='text-secondary font-semibold uppercase'>Renta Variable</h2>
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
      </div>
      <div className='flex flex-col gap-y-1'>
        <h2 className='text-light font-semibold uppercase'>Renta Variable</h2>
        {inversiones.fijas.map((data, index) => (
          <Link
            href={`/renta-fija/${sanitizeTitleForURL(data.title)}`}
            key={index}
          >
            <a className={`${sanitizeTitleForURL(data.title) === path.split('/')[2] && 'text-light'} text-light-hover`}>
              {data.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Submenu
