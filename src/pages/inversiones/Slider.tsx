import { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Back, Forward } from '../../icons'
import ItemSlider from './ItemSlider'
import Modal from './Modal'
import useFetch from '../../hooks/useFetch'

const Slider = ({ id }) => {
  const { data, loading } = useFetch(`/imagenes/${id}`)

  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)
  const handelNext = () => {
    if (currentIndex === data.length - 1) {
      setCurrentImage(data[0].image)
      setcurrentIndex(0)
    } else {
      setCurrentImage(data[currentIndex + 1].image)
      setcurrentIndex(currentIndex + 1)
    }
  }
  const handelPrev = () => {
    if (currentIndex === 0) {
      setCurrentImage(data[data.length - 1].image)
      setcurrentIndex(data.length - 1)
    } else {
      setCurrentImage(data[currentIndex - 1].image)
      setcurrentIndex(currentIndex - 1)
    }
  }

  const sliderProperties = {
    autoplay: false,
    transitionDuration: 250,
    indicators: false,
    arrows: true,
    infinite: true,

    prevArrow: (
      <div className='text-gray text-xl lg:text-3xl bg-white py-3 px-6 hover:bg-black hover:text-white'>
        <Back />
      </div>
    ),
    nextArrow: (
      <div className='text-gray text-xl lg:text-3xl bg-white py-3 px-6 hover:bg-black hover:text-white'>
        <Forward />
      </div>
    )
  }

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]

  return (
    <section>
      {!loading && data.length && (
        <div className='mb-20'>
          <Slide
            {...sliderProperties}
            responsive={responsiveSettings}
          >
            {data.map((item, index) => (
              <ItemSlider
                key={index}
                image={item.image}
                setCurrentImage={setCurrentImage}
              />
            ))}
          </Slide>
        </div>
      )}

      {currentImage && (
        <Modal
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          handelNext={handelNext}
          handelPrev={handelPrev}
        />
      )}
    </section>
  )
}

export default Slider
