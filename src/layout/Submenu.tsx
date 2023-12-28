// import { Link } from 'wouter'
import { inversiones } from '../data'

const Submenu = () => {
  return (
    <div className='absolute text-sm bg-white p-6 pr-12 -ml-6 pt-10 hidden submenu'>
      <div className='flex flex-col gap-y-1 mb-6'>
        <h2 className='text-secondary font-semibold uppercase'>Renta Variable</h2>
        {inversiones.variables.map((data, index) => (
          <a
            href='#'
            key={index}
            className='hover:text-black/50'
          >
            {data.title}
          </a>
        ))}
      </div>
      <div className='flex flex-col gap-y-1'>
        <h2 className='text-light font-semibold uppercase'>Renta Variable</h2>
        {inversiones.fijas.map((data, index) => (
          <a
            href='#'
            key={index}
            className='hover:text-black/50'
          >
            {data.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Submenu
