interface Props {
  data: {
    id: number
    name: string
    title: string
    text: string
    image: string
  }
}

const ItemCasosdeexito = ({ data }: Props) => {
  return (
    <article className='bg-white px-12 lg:px-6 py-6 flex flex-col gap-y-6 rounded-bl-3xl aspect-square lg:mr-6'>
      <div className='row flex items-center gap-x-4'>
        <div>
          <img
            src={data.image}
            alt={data.name}
            className='w-16 h-16 object-cover rounded-full'
          />
        </div>
        <div>
          <h1 className='font-secondary font-medium text-xl mb-1'>{data.name}</h1>
          <p className='text-gray text-sm font-medium'>{data.title}</p>
        </div>
      </div>
      <div className='text-wrap text-gray text-sm'>{data.text}</div>
    </article>
  )
}

export default ItemCasosdeexito
