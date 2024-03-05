import { useState } from 'react'

interface Props {
  data: {
    title: string
    text: string
  }
}
const ItemFaqs = ({ data: { title, text } }: Props) => {
  const [show, setShow] = useState(false)

  return (
    <article
      className={`px-4 lg:px-8 py-3 rounded-3xl relative cursor-pointer ${show ? 'bg-white' : 'hover:bg-white'} `}
      onClick={() => setShow(!show)}
    >
      <div className='flex justify-between gap-x-4 items-center'>
        <h1 className='font-bold'>{title}</h1>
        <button className='text-3xl'>{show ? '-' : '+'}</button>
      </div>
      <div className={`text-gray p-3 text-sm bg-gray-100 my-3 ${show ? 'block' : 'hidden'}`}>
        <p>{text}</p>
      </div>
    </article>
  )
}

export default ItemFaqs
