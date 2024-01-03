interface Props {
  data: {
    title: string
    text: string
  }
  index: number
  show: boolean
  setActive: React.Dispatch<React.SetStateAction<number>>
}
const ItemFaqs = ({ data, show, setActive, index }: Props) => {
  return (
    <article
      className={`px-4 lg:px-8 py-3 rounded-3xl relative cursor-pointer ${
        show ? 'bg-white fade-in' : 'hover:bg-white/25'
      } `}
      onClick={() => setActive(index)}
    >
      <div className='flex justify-between gap-x-4 items-center'>
        <h1 className='font-secondary font-bold'>{data.title}</h1>
        <button className='text-3xl'>{show ? '-' : '+'}</button>
      </div>
      <div className={`text-gray p-3 text-sm bg-gray-100 my-3 ${show ? 'block' : 'hidden'}`}>
        <p>{data.text}</p>
      </div>
    </article>
  )
}

export default ItemFaqs
