import Image from '../../components/Image'

interface Props {
  data: {
    title: string
    description: string
    image: string
    banner?: string
  }
}

const ItemDestacadas = ({ data }: Props) => {
  return (
    <article className='rounded-bl-3xl overflow-hidden relative'>
      {data.banner && (
        <div className='absolute -right-14 top-10 bg-secondary text-white font-medium w-full py-3 z-20 text-sm text-center rotate-[30deg]'>
          {data.banner}
        </div>
      )}

      <div className='absolute w-full h-full top-0 z-10 transition-all p-6 flex flex-col justify-end'>
        <div className='bg-white p-6 rounded-bl-3xl'>
          <h2 className='text-primary font-secondary'>{data.title}</h2>
          <h2 className='text-gray-400 text-sm'>{data.description}</h2>
        </div>
      </div>
      <Image
        src={data.image}
        alt={data.title}
      />
    </article>
  )
}

export default ItemDestacadas
