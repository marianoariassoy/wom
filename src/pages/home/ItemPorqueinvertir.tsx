interface Props {
  data: {
    title: string
    text: string
    color: string
    icon: string
  }
}
const ItemPorqueinvertir = ({ data: { title, text, color, icon } }: Props) => {
  return (
    <article className='bg-white rounded-bl-3xl flex flex-col gap-y-4 pb-6'>
      <div className={`${color} px-6 py-3 flex items-center justify-between gap-x-3`}>
        <h2 className='text-white font-secondary'>{title}</h2>
        <img src={icon} />
      </div>
      <div className='px-6 text-sm text-gray overflow-y-auto text-wrap h-40'>{text}</div>
    </article>
  )
}

export default ItemPorqueinvertir
