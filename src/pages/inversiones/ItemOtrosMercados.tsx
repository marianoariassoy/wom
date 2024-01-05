import { Pin } from '../../icons'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import ItemInfo from './ItemInfo'

const ItemOtrosMercados = ({ data: { id, title } }) => {
  const { data, loading } = useFetch(`/inversiones/info/${id}`)

  return (
    <article className="className='flex flex-col gap-6'">
      <div className='flex gap-x-3 items-center text-2xl mb-6'>
        <div className='text-secondary'>
          <Pin />
        </div>
        <h1 className='font-secondary font-bold text-primary'>{title}</h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className='flex flex-col gap-y-3 text-gray'>
          {data
            .filter(item => item.type === 1)
            .map((item, index) => (
              <ItemInfo
                key={index}
                item={item}
                color='text-secondary'
              />
            ))}
        </div>
      )}
      {!loading && data.filter(item => item.type === 2).length > 0 && (
        <div className='mt-6'>
          <h1 className='font-secondary font-bold text-primary text-xl mb-6'>¿Por qué invertir en {title}?</h1>
          <div className='flex flex-col gap-y-3 text-gray'>
            {data
              .filter(item => item.type === 2)
              .map((item, index) => (
                <ItemInfo
                  key={index}
                  item={item}
                  color='text-secondary'
                />
              ))}
          </div>
        </div>
      )}
    </article>
  )
}

export default ItemOtrosMercados
