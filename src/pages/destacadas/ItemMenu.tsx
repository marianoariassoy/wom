import { Link, useLocation } from 'wouter'
import { sanitizeTitleForURL } from '../../utils'

const ItemMenu = ({ data }) => {
  const url = `/inversiones-destacadas/${data.id}/${sanitizeTitleForURL(data.title)}`
  const [location] = useLocation()

  return (
    <Link href={url}>
      <a
        className={`bg-white px-6 transition-all py-4 rounded-bl-3xl ${
          location === url ? 'item-destacada-active' : 'item-destacada'
        }`}
      >
        <h2 className='text-primary font-bold'>{data.title}</h2>
        <h2 className='text-black/50 font-medium text-sm uppercase'>{data.description}</h2>
      </a>
    </Link>
  )
}

export default ItemMenu
