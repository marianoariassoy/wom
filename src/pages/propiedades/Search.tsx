import { amount } from '../../data'
import { useDataContext } from '../../context/useDataContext'
import { Link } from 'wouter'
import useFetch from '../../hooks/useFetch'

const Form = () => {
  const { data, loading } = useFetch(`/ciudades`)
  const { filterCity, filterPrice, setFilterCity, setFilterPrice } = useDataContext()

  return (
    <div className='w-full max-w-4xl mx-auto flex items-center flex-col lg:flex-row gap-4 mb-16'>
      <select
        name='city'
        className='w-full cursor-pointer select bg-white rounded-2xl h-14 text-black text-sm appearance-none uppercase px-6 border border-gray-300 flex-grow font-medium '
      >
        <option value='0'>Todas las ciudades</option>
        {!loading &&
          data.map((item, index) => {
            return (
              <option
                key={index}
                value={item.title}
                {...(item.title === filterCity ? { selected: true } : {})}
                onClick={() => setFilterCity(item.title)}
              >
                {item.title}
              </option>
            )
          })}
      </select>
      <select
        name='amount'
        className='w-full cursor-pointer select bg-white rounded-2xl h-14 text-black text-sm appearance-none uppercase px-6 border border-gray-300 flex-grow font-medium'
      >
        <option value='0'>Todos los montos</option>
        {amount.map((item, index) => {
          return (
            <option
              key={index}
              value={item.value}
              {...(item.value === filterPrice ? { selected: true } : {})}
              onClick={() => setFilterPrice(item.value)}
            >
              {item.title}
            </option>
          )
        })}
      </select>

      <Link
        href='/propiedades'
        className='text-white bg-secondary font-medium transition-all px-14 hover:bg-black rounded-2xl h-14 w-full lg:w-auto text-sm flex items-center justify-center'
      >
        BUSCAR
      </Link>
    </div>
  )
}

export default Form
