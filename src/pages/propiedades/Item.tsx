import { Link } from 'wouter'
import Image from '../../components/Image'
import { Down } from '../../components/icons'
import { alertsMore } from '../../data'

const Item = ({ data }) => {
  const price = data.price.toLocaleString('de-DE')

  return (
    <article className='flex flex-col shadow-lg rounded-bl-3xl overflow-hidden relative fade-in-fast'>
      <div className='aspect-video lg:aspect-[5/4] relative overflow-hidden bg-slate-100'>
        <Link href={`/propiedades/${data.id}`}>
          <a className='absolute bg-black/30 backdrop-blur-sm w-full h-full z-20 top-0 left-0 transition-all  text-white text-4xl flex items-center justify-center opacity-0 hover:opacity-100'>
            +
          </a>
        </Link>
        <Image
          src={data.image}
          alt={data.city}
        />
      </div>
      <div className='flex justify-between items-center px-6 py-3 bg-primary text-white '>
        <span className='text-sm'>{data.subject}</span>
        <span className='font-medium'>USD {price}</span>
      </div>
      <div className='flex flex-col justify-between gap-y-2 p-6'>
        <div className='min-h-20 border-b border-gray-300'>
          <h2 className='text-primary font-semibold'>{data.city}</h2>
          <p className='font-light text-gray text-sm'>{data.location}</p>
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
      {data.alert && (
        <div
          className={`absolute w-full top-12 lg:top-10 -right-20 lg:-right-16 font-bold text-xs p-3 text-white z-30 text-center rotate-[30deg] uppercase ${
            data.alert < 3 ? 'bg-secondary' : data.alert < 7 ? 'bg-light' : 'bg-primary'
          }`}
        >
          {alertsMore[data.alert]}
        </div>
      )}
    </article>
  )
}

export default Item
