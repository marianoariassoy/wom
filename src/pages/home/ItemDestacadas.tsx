import { Link } from 'wouter'
import Image from '../../components/Image'
import { sanitizeTitleForURL } from '../../utils'

interface Props {
  data: {
    id: number
    title: string
    description: string
    image: string
    banner?: string
  }
}

const ItemDestacadas = ({ data: { id, title, description, image, banner } }: Props) => {
  const url = `/inversiones-destacadas/${id}/${sanitizeTitleForURL(title)}`

  return (
    <article className='rounded-bl-3xl overflow-hidden relative'>
      {banner && (
        <div
          className={`absolute -right-14 top-10 text-white font-medium w-full py-3 text-sm text-center rotate-[30deg] uppercase z-50
          ${banner === 'Nuevo Lanzamiento' && 'bg-secondary'}
          ${banner === 'Renta Temporal' && 'bg-primary'}
          ${banner === 'Últimas Unidades' && 'bg-light'}
          `}
        >
          {banner}
        </div>
      )}

      <Link href={url}>
        <span className='absolute w-full h-full top-0 transition-all p-6 flex flex-col justify-end z-30 cursor-pointer hover:backdrop-blur-sm'>
          <div className='bg-white p-6 rounded-bl-3xl'>
            <h2 className='text-primary font-bold'>{title}</h2>
            <h2 className='text-black/50 font-medium text-sm uppercase'>{description}</h2>
          </div>
        </span>
      </Link>

      <Image
        src={image}
        alt={title}
      />
    </article>
  )
}

export default ItemDestacadas
