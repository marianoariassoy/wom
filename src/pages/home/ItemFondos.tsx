import { Link } from 'wouter'
import Image from '../../components/Image'
import { inversion } from '../../data'
import { sanitizeTitleForURL } from '../../utils'

const ItemIversiones = ({ data }) => {
  const url1 = '/renta-variable/' + sanitizeTitleForURL(data[0].title) + '/' + data[0].id
  const url2 = '/renta-fija/' + sanitizeTitleForURL(data[1].title) + '/' + data[1].id

  return (
    <article className='grid grid-cols-2 rounded-bl-3xl overflow-hidden shadow-main h-[300px] gap-x-3'>
      <div className='col relative'>
        <Link href={url1}>
          <a className='absolute bg-black/15 backdrop-blur w-full h-full z-20 top-0 left-0 transition-all  text-white text-4xl flex items-center justify-center opacity-0 hover:opacity-100'>
            +
          </a>
        </Link>
        <div className='aspect-[5-4]'>
          <Image
            src={data[0].image}
            alt={data[0].title}
          />
        </div>
      </div>
      <div className='col px-8 py-6 flex flex-col items-start gap-y-3'>
        <div>
          <h1 className='font-bold text-xl uppercase mb-3'>{data[0].title}</h1>
        </div>

        <div className='grid grid-cols-2 gap-20'>
          {data.map((item, index) => (
            <div
              className='col flex flex-col items-start'
              key={index}
            >
              <h3 className={`text-sm uppercase font-medium ${item.type === 1 ? 'text-secondary' : 'text-light'}`}>
                {inversion[item.type]}
              </h3>
              <p className='text-gray'>
                Rentabilidad estimada
                <span className={`font-semibold text-xl ml-1 ${item.type === 1 ? 'text-secondary' : 'text-light'}`}>
                  {item.rentability}
                </span>
              </p>
              <h4 className='font-semibold'>INVERSIONES DESDE {item.from}</h4>
              <Link href={item.type === 1 ? url1 : url2}>
                <a
                  className={`font-bold text-white px-4 py-2 text-sm mt-3 hover:bg-black transition-colors ${
                    item.type === 1 ? 'bg-secondary' : 'bg-light'
                  }`}
                >
                  VER MÁS +
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ItemIversiones
