import Image from '../../components/Image'

interface Props {
  data: {
    title: string
    type: string
    rentatibility: string
    from: string
    image: string
  }
}

const ItemIversiones = ({ data: { title, type, rentatibility, from, image } }: Props) => {
  return (
    <article className='grid grid-cols-2 rounded-bl-3xl overflow-hidden shadow-main'>
      <div className='col relative'>
        <a
          href='#'
          className='absolute bg-black/15 backdrop-blur w-full h-full z-20 top-0 left-0 transition-all  text-white text-4xl flex items-center justify-center opacity-0 hover:opacity-100'
        >
          +
        </a>
        <Image
          src={image}
          alt={title}
        />
      </div>
      <div className='col px-8 py-6 flex flex-col items-start gap-y-3'>
        <div>
          <h2 className='font-bold text-xl'>{title}</h2>
          <h3
            className={`text-sm uppercase font-medium ${type === 'Renta variable' ? 'text-secondary' : 'text-light'}`}
          >
            {type}
          </h3>
        </div>
        <p className='text-gray'>
          Rentabilidad estimada{' '}
          <span className={`font-semibold text-xl ${type === 'Renta variable' ? 'text-secondary' : 'text-light'}`}>
            {rentatibility}
          </span>
        </p>
        <h4 className='font-semibold'>INVERSIONES DESDE {from}</h4>
        <button
          className={`font-bold text-white px-4 py-2 text-sm hover:bg-black transition-colors ${
            type === 'Renta variable' ? 'bg-secondary' : 'bg-light'
          }`}
        >
          VER MÁS +
        </button>
      </div>
    </article>
  )
}

export default ItemIversiones
