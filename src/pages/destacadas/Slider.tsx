import { useState } from 'react'
import ItemSlider from './ItemSlider'
import Modal from '../inversiones/Modal'
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

  return (
    <section className='mt-6'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
        {!loading &&
          data.map((item, index) => (
            <ItemSlider
              key={index}
              image={item.image}
              setCurrentImage={setCurrentImage}
            />
          ))}
      </div>
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
