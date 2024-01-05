import { Check, Bull } from '../../icons'

interface Props {
  item: {
    text: string
    type: number
  }
  color: string
}

const ItemInfo = ({ item: { text, type }, color }: Props) => {
  return (
    <article className='flex gap-x-3 items-center'>
      <div className={`text-xl ${color}`}>{type === 1 ? <Check /> : <Bull />}</div>
      <div>{text}</div>
    </article>
  )
}

export default ItemInfo
