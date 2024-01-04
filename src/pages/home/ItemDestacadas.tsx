import Image from '../../components/Image'

interface Props {
  data: {
    title: string
    description: string
    image: string
    banner?: string
  }
}

const ItemDestacadas = ({ data: { title, description, image, banner } }: Props) => {
  return (
    <article className='rounded-bl-3xl overflow-hidden relative'>
      {banner && (
        <div className='absolute -right-14 top-10 bg-secondary text-white font-medium w-full py-3 z-20 text-sm text-center rotate-[30deg]'>
          {banner}
        </div>
      )}

      <div className='absolute w-full h-full top-0 z-10 transition-all p-6 flex flex-col justify-end'>
        <div className='bg-white p-6 rounded-bl-3xl'>
          <h2 className='text-primary font-secondary'>{title}</h2>
          <h2 className='text-gray-400 text-sm'>{description}</h2>
        </div>
      </div>
      <Image
        src={image}
        alt={title}
      />
    </article>
  )
}

export default ItemDestacadas
