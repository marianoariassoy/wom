interface Props {
  data: {
    title: string
    text: string
    color: string
    icon: string
  }
}
const ItemPorqueinvertir = ({ data }: Props) => {
  return (
    <article className='bg-white rounded-bl-3xl flex flex-col gap-y-4 pb-6'>
      <div className={`${data.color} px-8 py-3 flex items-center justify-between`}>
        <h2 className='text-white font-secondary'>{data.title}</h2>
        <img src={data.icon} />
      </div>
      <div className='px-8 text-sm text-gray overflow-y-auto text-wrap h-40'>{data.text}</div>
    </article>
  )
}

export default ItemPorqueinvertir
