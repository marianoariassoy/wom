import { Link } from 'wouter'
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
    <article className='grid grid-cols-2 rounded-bl-3xl overflow-hidden shadow-main lg:h-[300px] gap-x-3'>
      <div className='col relative lg:h-[300px]'>
        <Link href={url}>
          <a className='absolute bg-black/30 backdrop-blur-sm w-full h-full z-20 top-0 left-0 transition-all  text-white text-4xl flex items-center justify-center opacity-0 hover:opacity-100'>
            +
          </a>
        </Link>

        <Image
          src={image}
          alt={title}
        />
      </div>
      <div className='col px-8 py-6 flex flex-col items-start gap-y-3'>
        <div>
          <h2 className='font-bold text-xl uppercase'>{title}</h2>
          <h3 className={`text-sm uppercase font-medium ${type === 1 ? 'text-secondary' : 'text-light'}`}>
            {inversion[type]}
          </h3>
        </div>
        <p className='text-gray'>
          Rentabilidad {type === 1 ? 'variable' : ''}
          <span className={`block font-semibold text-xl ${type === 1 ? 'text-secondary' : 'text-light'}`}>
            {rentability}
          </span>
        </p>
        <h4 className='font-semibold'>INVERSIONES DESDE {from}</h4>
        <Link href={url}>
          <a
            className={`font-bold mb-2 text-white px-5 py-3 text-sm hover:bg-black transition-colors ${
              type === 1 ? 'bg-secondary' : 'bg-light'
            }`}
          >
            VER MÁS +
          </a>
        </Link>
      </div>
    </article>
  )
}

export default ItemIversiones
