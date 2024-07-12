import { Link } from 'wouter'
import Image from '../../components/Image'
import { Down } from '../../components/icons'

const Item = ({ data }) => {
  return (
    <article className='flex flex-col shadow-lg rounded-bl-3xl overflow-hidden relative'>
      <div className='aspect-video lg:aspect-[5/4] relative overflow-hidden bg-slate-100'>
        <Link href={`/propiedades/${data.id}`}>
          <a className='absolute bg-black/30 backdrop-blur-sm w-full h-full z-20 top-0 left-0 transition-all  text-white text-4xl flex items-center justify-center opacity-0 hover:opacity-100'>
            +
          </a>
        </Link>
        <Image
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className='flex justify-between items-center px-6 py-3 bg-primary text-white '>
        <span className='text-sm'>{data.from}</span>
        <span className='font-medium'>{data.price}</span>
      </div>
      <div className='flex flex-col justify-between gap-y-2 p-6'>
        <div className='min-h-20 border-b border-gray-300'>
          <h2 className='text-primary font-semibold'>{data.title}</h2>
          <p className='font-light text-gray text-sm'>{data.description}</p>
        </div>
        <div>
          <Link
            href={`/propiedades/${data.id}`}
            className='font-bold text-sm text-primary flex items-center gap-x-1 text-secondary-hover'
          >
            VER MÁS <Down />
          </Link>
        </div>
      </div>
      <div
        className='absolute w-full top-12 lg:top-6 -right-20 lg:-right-16 bg-secondary font-bold text-xs p-3 text-white z-30 text-center
    rotate-[30deg]
      '
      >
        VENDIDA
      </div>
    </article>
  )
}

export default Item
