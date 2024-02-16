import { SocaloBottom } from '../../ui'
import ItemPorqueinvertir from './ItemPorqueinvertir'
import useFetch from '../../hooks/useFetch'

const Porqueinvertir = () => {
  const { data, loading } = useFetch(`/porqueinvertir`)

  return (
    <section
      id='porque'
      className='relative'
    >
      <div className='w-full m-auto max-w-6xl pt-20 px-6'>
        <h1 className='text-white text-center font-secondary text-2xl lg:text-3xl mb-12 font-bold'>
          ¿Por qué invertir en Real Estate en EE.UU.?
        </h1>
        {!loading && (
          <div className='grid lg:grid-cols-3 gap-6 mb-20'>
            {data.map((item, index) => (
              <ItemPorqueinvertir
                key={index}
                data={item}
                color={index >= 3 ? 'bg-primary' : 'bg-secondary'}
              />
            ))}
          </div>
        )}

        <SocaloBottom color='bg-primary'> </SocaloBottom>
      </div>
    </section>
  )
}

export default Porqueinvertir
