import { SocaloBottom, SocaloTop } from '../../ui'
import ItemIversiones from './ItemIversiones'
import ItemFondos from './ItemFondos'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Inversiones = () => {
  const { data, loading } = useFetch(`/inversiones`)

  return (
    <section id='inversiones'>
      <div className='w-full m-auto max-w-6xl px-6'>
        <SocaloTop color='bg-primary' />
        {loading ? (
          <Loader />
        ) : (
          <section className='py-20 flex flex-col gap-y-6'>
            <div className='grid lg:grid-cols-2 gap-6 '>
              {data
                .filter(item => item.type === 1 && item.title != 'Fondo de inversión')
                .map((item, index) => (
                  <ItemIversiones
                    key={index}
                    data={item}
                  />
                ))}
            </div>
            <div>
              <ItemFondos data={data.filter(item => item.title == 'Fondo de inversión')} />
            </div>
            <div className='grid lg:grid-cols-2 gap-6 '>
              {data
                .filter(item => item.type === 2 && item.title != 'Fondo de inversión')
                .map((item, index) => (
                  <ItemIversiones
                    key={index}
                    data={item}
                  />
                ))}
            </div>
          </section>
        )}

        <SocaloBottom color='bg-gray'> </SocaloBottom>
      </div>
    </section>
  )
}

export default Inversiones
