import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'

interface Props {
  data: {
    id: number
    image: string
    alt: string
  }[]
}

const Slider = ({ data }: Props) => {
  const sliderProperties = {
    autoplay: true,
    transitionDuration: 250,
    indicators: true,
    arrows: false,
    infinite: true,
    pauseOnHover: true
  }

  return (
    <Slide {...sliderProperties}>
      {data.map(item => (
        <div
          key={item.id}
          className='h-[70vh] w-screen'
        >
          <Image
            src={item.image}
            alt={item.alt}
          />
        </div>
      ))}
    </Slide>
  )
}

export default Slider
