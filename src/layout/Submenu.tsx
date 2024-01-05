import { Link, useLocation } from 'wouter'
import { sanitizeTitleForURL } from '../utils'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'

const Submenu = () => {
  const { data, loading } = useFetch(`/inversiones`)
  const [path] = useLocation()

  if (loading) return <Loader />

  return (
    <div className='absolute text-sm bg-white p-6 pr-12 -ml-6 pt-10 hidden submenu'>
      <div className='flex flex-col gap-y-1 mb-6'>
        <h2 className='text-secondary font-semibold uppercase'>Renta Variable</h2>
        {data
          .filter(item => item.type === 1)
          .map((data, index) => (
            <Link
              href={`/renta-variable/${sanitizeTitleForURL(data.title)}/${data.id}`}
              key={index}
            >
              <a className={`${data.id === +path.split('/')[3] && 'text-secondary'} text-secondary-hover`}>
                {data.title}
              </a>
            </Link>
          ))}
      </div>
      <div className='flex flex-col gap-y-1'>
        <h2 className='text-light font-semibold uppercase'>Renta Variable</h2>
        {data
          .filter(item => item.type === 2)
          .map((data, index) => (
            <Link
              href={`/renta-fija/${sanitizeTitleForURL(data.title)}/${data.id}`}
              key={index}
            >
              <a className={`${data.id === +path.split('/')[3] && 'text-light'} text-light-hover`}>{data.title}</a>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Submenu
