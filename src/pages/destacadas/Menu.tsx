import useFetch from '../../hooks/useFetch'
import ItemMenu from './ItemMenu'

const Menu = () => {
  const { data, loading } = useFetch(`/destacadas`)

  if (loading) return null

  return (
    <section className='lg:w-80'>
      <h1 className='text-white font-bold text-2xl mb-10'>Inversiones destacadas</h1>

      <div className='flex flex-col gap-y-3'>
        {data.map((data, index) => (
          <ItemMenu
            key={index}
            data={data}
          />
        ))}
      </div>
    </section>
  )
}

export default Menu
