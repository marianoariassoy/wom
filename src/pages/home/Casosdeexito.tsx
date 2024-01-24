import { SocaloBottom } from '../../ui'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import ItemCasosdeexito from './ItemCasosdeexito'
import { Back, Forward } from '../../components/icons'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Casosdeexito = () => {
  const { data, loading } = useFetch(`/casosdeexito`)

  const sliderProperties = {
    autoplay: false,
    transitionDuration: 250,
    indicators: false,
    arrows: true,
    infinite: true,

    prevArrow: (
      <div className='hover:text-black lg:-ml-16 text-3xl text-gray'>
        <Back />
      </div>
    ),
    nextArrow: (
      <div className='hover:text-black lg:-mr-16 text-3xl text-gray'>
        <Forward />
      </div>
    )
  }

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  return (
    <section id='casos'>
      <div className='w-full m-auto max-w-6xl pt-20 px-6'>
        <h1 className='font-secondary text-2xl lg:text-3xl mb-12'>Casos de éxito</h1>
        <div className='mb-20'>
          {loading ? (
            <Loader />
          ) : (
            <Slide
              {...sliderProperties}
              responsive={responsiveSettings}
            >
              {data.map(item => (
                <ItemCasosdeexito
                  data={item}
                  key={item.id}
                />
              ))}
            </Slide>
          )}
        </div>
        <SocaloBottom color='bg-tertiary'> </SocaloBottom>
      </div>
    </section>
  )
}

export default Casosdeexito
