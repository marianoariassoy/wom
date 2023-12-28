import { SocaloBottom } from '../../ui'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import ItemCasosdeexito from './ItemCasosdeexito'
import { Back, Forward } from '../../icons'

const Casosdeexito = () => {
  const sliderProperties = {
    autoplay: false,
    indicators: false,
    arrows: true,
    infinite: true,

    prevArrow: (
      <div className='hover:text-black -ml-16 text-3xl text-gray'>
        <Back />
      </div>
    ),
    nextArrow: (
      <div className='hover:text-black -mr-16 text-3xl text-gray'>
        <Forward />
      </div>
    )
  }

  const data = [
    {
      id: 1,
      name: 'Carlos',
      title: 'INVERSOR DE ARGENTINA',
      text: 'Adquirió un departamento en Orlando a mediados de 2021. Pagó un valor de USD 164.900 con financiamiento aún vigente. A fines de 2023 el valor de su propiedad se ubica en USD 275.000, marcando un incremento de capital de USD 110.000 en menos de dos años y medio, lo que implica una revalorización del 67%.',
      image: 'https://images.pexels.com/photos/13699945/pexels-photo-13699945.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 1,
      name: 'Carlos',
      title: 'INVERSOR DE ARGENTINA',
      text: 'Adquirió un departamento en Orlando a mediados de 2021. Pagó un valor de USD 164.900 con financiamiento ital de USD 110.000 en menos de dos años y medio, lo que implica una revalorización del 67%.',
      image: 'https://images.pexels.com/photos/13699945/pexels-photo-13699945.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 1,
      name: 'Carlos',
      title: 'INVERSOR DE ARGENTINA',
      text: 'Adquirió un departamento en Orlando a mediados de 2021. Pagó un valor de USD 164.900 con financiamiento aún vigente. A fines de 2023 el valor de su propiedad se ubica en USD 275.000, marcando un incremento de capital de USD 110.000 en menos de dos años y medio, lo que implica una revalorización del 67%.',
      image: 'https://images.pexels.com/photos/13699945/pexels-photo-13699945.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 1,
      name: 'Carlos',
      title: 'INVERSOR DE ARGENTINA',
      text: 'Adquirió un departamento en Orlando a mediados de 2021. Pagó un valor de USD 164.900 con financiamiento aún vigente. A fines de 2023 el valor de su propiedad se ubica en USD 275.000, marcando un incremento de capital de USD 110.000 en menos de dos años y medio, lo que implica una revalorización del 67%.',
      image: 'https://images.pexels.com/photos/13699945/pexels-photo-13699945.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 1,
      name: 'Carlos',
      title: 'INVERSOR DE ARGENTINA',
      text: 'Adquirió un departamento en Orlando a mediados de 2021. Pagó un valor de USD 164.900 con financiamiento aún vigente. A fines de 2023 el valor de su propiedad se ubica en USD 275.000, marcando un incremento de capital de USD 110.000 en menos de dos años y medio, lo que implica una revalorización del 67%.',
      image: 'https://images.pexels.com/photos/13699945/pexels-photo-13699945.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 1,
      name: 'Carlos',
      title: 'INVERSOR DE ARGENTINA',
      text: 'Adquirió un departamento en Orlando a mediados de 2021. Pagó un valor de USD 164.900 con financiamiento aún vigente. A fines de 2023 el valor de su propiedad se ubica en USD 275.000, marcando un incremento de capital de USD 110.000 en menos de dos años y medio, lo que implica una revalorización del 67%.',
      image: 'https://images.pexels.com/photos/13699945/pexels-photo-13699945.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 1,
      name: 'Carlos',
      title: 'INVERSOR DE ARGENTINA',
      text: 'Adquirió un departamento en Orlando a mediados de 2021. Pagó un valor de USD 164.900 con financiamiento aún vigente. A fines de 2023 el valor de su propiedad se ubica en USD 275.000, marcando un incremento de capital de USD 110.000 en menos de dos años y medio, lo que implica una revalorización del 67%.',
      image: 'https://images.pexels.com/photos/13699945/pexels-photo-13699945.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 1,
      name: 'Carlos',
      title: 'INVERSOR DE ARGENTINA',
      text: 'Adquirió un departamento en Orlando a mediados de 2021. Pagó un valor de USD 164.900 con financiamiento aún vigente. A fines de 2023 el valor de su propiedad se ubica en USD 275.000, marcando un incremento de capital de USD 110.000 en menos de dos años y medio, lo que implica una revalorización del 67%.',
      image: 'https://images.pexels.com/photos/13699945/pexels-photo-13699945.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <section id='casos'>
      <div className='w-full m-auto max-w-6xl pt-20 px-6'>
        <h1 className='font-secondary text-3xl mb-12'>Casos de éxito</h1>
        <div className='mb-20'>
          <Slide
            {...sliderProperties}
            slidesToScroll={3}
            slidesToShow={3}
          >
            {data.map(item => (
              <ItemCasosdeexito
                data={item}
                key={item.id}
              />
            ))}
          </Slide>
        </div>
        <SocaloBottom color='bg-tertiary' />
      </div>
    </section>
  )
}

export default Casosdeexito
