import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'

interface Props {
  data: {
    id: number
    image: string
    title: string
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
          className='h-[50vh] lg:h-[70vh] w-screen relative'
        >
          <div className='absolute z-10 w-full h-full top-1/3'>
            <div className='m-auto max-w-6xl mt-8 font-bold px-6 flex justify-end'>
              <h1 className='text-white font-secondary text-3xl lg:text-4xl text-wrap max-w-lg text-right '>
                {item.title}
              </h1>
            </div>
          </div>
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
