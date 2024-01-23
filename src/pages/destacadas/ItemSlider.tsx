import Image from '../../components/Image'

const ItemSlider = ({ image, setCurrentImage }) => {
  return (
    <article className='aspect-square relative'>
      <a
        href='#'
        className='absolute bg-black/15 backdrop-blur w-full h-full z-20 top-0 left-0 transition-all  text-white text-4xl flex items-center justify-center opacity-0 hover:opacity-100'
        onClick={() => setCurrentImage(image)}
      >
        +
      </a>
      <Image
        src={image}
        alt=''
      />
    </article>
  )
}

export default ItemSlider
