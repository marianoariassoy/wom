import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'
import { Back, Forward } from '../../components/icons'

interface Props {
  data: {
    id: number
    image: string
    title: string
  }[]
}

const Slider = ({ data }: Props) => {
  const sliderProperties = {
    autoplay: false,
    transitionDuration: 250,
    indicators: false,
    arrows: data.length > 1 ? true : false,
    infinite: true,
    pauseOnHover: true,
    prevArrow: (
      <button className='ml-6 hover:opacity-70 text-white transition-all'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='mr-6 hover:opacity-70 text-white transition-all'>
        <Forward />
      </button>
    )
  }

  return (
    <Slide {...sliderProperties}>
      {data.map(item => (
        <div
          key={item.id}
          className='w-full aspect-[5/4]'
        >
          <Image
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
    </Slide>
  )
}

export default Slider
