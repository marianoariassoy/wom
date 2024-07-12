import { cities, amount } from '../../data'

const Form = () => {
  return (
    <div className='w-full max-w-4xl mx-auto flex items-center flex-col lg:flex-row gap-4 mb-16'>
      <select
        name='city'
        className='w-full cursor-pointer select bg-white rounded-2xl h-14 text-black text-sm appearance-none uppercase px-6 border border-gray-300 flex-grow font-medium '
      >
        <option value='0'>Todas las ciudades</option>
        {cities.map((city, index) => {
          return <option key={index}>{city}</option>
        })}
      </select>
      <select
        name='amount'
        className='w-full cursor-pointer select bg-white rounded-2xl h-14 text-black text-sm appearance-none uppercase px-6 border border-gray-300 flex-grow font-medium'
      >
        <option value='0'>Todos los montos</option>
        {amount.map((num, index) => {
          return <option key={index}>{num}</option>
        })}
      </select>

      <button className='text-white bg-secondary font-medium transition-all px-14 hover:bg-black rounded-2xl h-14 w-full lg:w-auto text-sm'>
        BUSCAR
      </button>
    </div>
  )
}

export default Form
