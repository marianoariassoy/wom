interface Props {
  data: {
    name: string
    title: string
    text: string
    image: string
  }
}

const ItemCasosdeexito = ({ data: { name, title, text, image } }: Props) => {
  return (
    <article className='bg-white px-16 lg:px-6 py-6 flex flex-col gap-y-6 rounded-bl-3xl aspect-square lg:mr-6'>
      <div className='row flex items-center gap-x-4'>
        <div>
          <img
            src={image}
            alt={name}
            className='w-16 h-16 object-cover rounded-full'
          />
        </div>
        <div>
          <h1 className='font-medium text-xl mb-1'>{name}</h1>
          <p className='text-gray text-sm font-medium'>{title}</p>
        </div>
      </div>
      <div className='text-wrap text-gray text-sm'>{text}</div>
    </article>
  )
}

export default ItemCasosdeexito
