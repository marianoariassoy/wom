import { Link, useLocation } from 'wouter'
import { sanitizeTitleForURL } from '../../utils'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Menu = () => {
  const { data, loading } = useFetch(`/inversiones`)
  const [path] = useLocation()

  if (loading) return <Loader />

  return (
    <section className='col flex lg:flex-col gap-x-6 gap-y-12 text-sm'>
      <article>
        <h2 className='font-semibold p-4 bg-secondary text-white w-full lg:w-64 lg:px-12 mb-6'>RENTA VARIABLE</h2>
        <nav className='flex flex-col gap-y-3 uppercase text-gray font-medium'>
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
          <Link href={`/renta-variable/otros-mercados`}>
            <a className={`${'otros-mercados' === path.split('/')[2] && 'text-secondary'} text-secondary-hover`}>
              Otros Mercados
            </a>
          </Link>
        </nav>
      </article>
      <article>
        <h2 className='font-semibold p-4 bg-light text-white w-full lg:w-64 lg:px-12 mb-6'>RENTA FIJA</h2>
        <nav className='flex flex-col gap-y-3 uppercase text-gray font-medium'>
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
        </nav>
      </article>
    </section>
  )
}

export default Menu
