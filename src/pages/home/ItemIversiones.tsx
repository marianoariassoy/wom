import Image from '../../components/Image'
import { inversion } from '../../data'
import { sanitizeTitleForURL } from '../../utils'

interface Props {
  data: {
    id: number
    title: string
    type: number
    rentability: string
    from: string
    image: string
  }
}

const ItemIversiones = ({ data: { id, title, type, rentability, from, image } }: Props) => {
  const url = `${type === 1 ? '/renta-variable' : '/renta-fija'}/${sanitizeTitleForURL(title)}/${id}`

  return (
    <article className='grid grid-cols-2 rounded-bl-3xl overflow-hidden shadow-main h-[300px] gap-x-3'>
      <div className='col relative'>
        <a
          href={url}
          className='absolute bg-black/15 backdrop-blur w-full h-full z-20 top-0 left-0 transition-all  text-white text-4xl flex items-center justify-center opacity-0 hover:opacity-100'
        >
          +
        </a>
        <div className='aspect-[4-5] h-fulll'>
          <Image
            src={image}
            alt={title}
          />
        </div>
      </div>
      <div className='col px-8 py-6 flex flex-col items-start gap-y-3'>
        <div>
          <h2 className='font-bold text-xl uppercase'>{title}</h2>
          <h3 className={`text-sm uppercase font-medium ${type === 1 ? 'text-secondary' : 'text-light'}`}>
            {inversion[type]}
          </h3>
        </div>
        <p className='text-gray'>
          Rentabilidad estimada
          <span className={`font-semibold text-xl ml-1 ${type === 1 ? 'text-secondary' : 'text-light'}`}>
            {rentability}
          </span>
        </p>
        <h4 className='font-semibold'>INVERSIONES DESDE {from}</h4>
        <a
          href={url}
          className={`font-bold text-white px-4 py-2 text-sm hover:bg-black transition-colors ${
            type === 1 ? 'bg-secondary' : 'bg-light'
          }`}
        >
          VER MÁS +
        </a>
      </div>
    </article>
  )
}

export default ItemIversiones
