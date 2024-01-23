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
  const url = `/inversiones-destacadas/${sanitizeTitleForURL(title)}/${id}`

  return (
    <article className='rounded-bl-3xl overflow-hidden relative'>
      {banner && (
        <div className='absolute -right-14 top-10 bg-secondary text-white font-medium w-full py-3 z-20 text-sm text-center rotate-[30deg] uppercase'>
          {banner}
        </div>
      )}

      <Link href={url}>
        <a className='absolute w-full h-full top-0 transition-all p-6 flex flex-col justify-end z-30 hover:bg-black/30 hover:backdrop-blur-sm cursor-pointer'>
          <div className='bg-white p-6 rounded-bl-3xl'>
            <h2 className='text-primary font-secondary'>{title}</h2>
            <h2 className='text-black/50 font-medium text-sm uppercase'>{description}</h2>
          </div>
        </a>
      </Link>

      <Image
        src={image}
        alt={title}
      />
    </article>
  )
}

export default ItemDestacadas
