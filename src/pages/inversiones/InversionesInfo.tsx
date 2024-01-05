import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import ItemInfo from './ItemInfo'

const InversionesInfo = ({ id, color, title }) => {
  const { data, loading } = useFetch(`/inversiones/info/${id}`)

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className='flex flex-col gap-y-3 text-gray'>
          {data
            .filter(item => +item.type === 1)
            .map((item, index) => (
              <ItemInfo
                key={index}
                item={item}
                color={color}
              />
            ))}
        </div>
      )}

      {!loading && data.filter(item => +item.type === 2).length > 0 && (
        <div className='mt-12'>
          <h1 className='font-secondary font-bold text-primary text-xl mb-6'>¿Por qué invertir en {title}?</h1>
          <div className='flex flex-col gap-y-3 text-gray'>
            {data
              .filter(item => +item.type === 2)
              .map((item, index) => (
                <ItemInfo
                  key={index}
                  item={item}
                  color={color}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default InversionesInfo
