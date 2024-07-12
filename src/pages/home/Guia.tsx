import { useState } from 'react'
import { Link } from 'wouter'
import Image from '../../components/Image'
import { Back, Forward } from '../../components/icons'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Guia = () => {
  const { data, loading } = useFetch(`/guiainversor`)
  const [active, setActive] = useState(0)

  const handleNext = () => {
    if (active < data.length - 1) {
      setActive(active + 1)
    } else {
      setActive(0)
    }
  }

  const handleBack = () => {
    if (active > 0) {
      setActive(active - 1)
    } else {
      setActive(data.length - 1)
    }
  }

  return (
    <section
      id='guia'
      className='bg-gray'
    >
      <div className='w-full m-auto max-w-6xl px-6 pt-6 relative'>
        <h1 className='text-2xl lg:text-3xl text-primary font-bold text-center mb-16'>Guía para el inversor</h1>

        {loading ? (
          <Loader />
        ) : (
          <article className='flex items-center'>
            <div className='col lg:w-2/5 relative hidden lg:block'>
              <div className='overflow-hidden aspect-[5/4]'>
                <div className='w-full h-full absolute rounded-tl-2xl ml-14 overflow-hidden'>
                  <Image
                    src={data[active].image}
                    alt={data[active].title}
                  />
                </div>
              </div>
            </div>
            <div className='col lg:w-3/5 lg:pr-20'>
              <div className='w-full shadow-main rounded-tl-3xl flex flex-col bg-white overflow-hidden pb-14'>
                <div className='bg-primary text-white px-6 lg:pl-28 py-8'>
                  <h1 className='text-xl font-bold mb-3'>¿Cómo invertir?</h1>
                  <p className='text-sm'>Adquiere tu inmueble en Estados Unidos en forma sencilla</p>
                </div>
                <div className='px-6 lg:pl-28 pt-12'>
                  <div className='flex items-center gap-x-3 mb-6'>
                    {data.map((_, index) => (
                      <button
                        key={index}
                        className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-white bg-secondary-hover ${
                          index === active ? 'bg-secondary' : 'bg-gray'
                        }`}
                        onClick={() => setActive(index)}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  <div className='min-h-[200px]'>
                    <h1 className='text-xl font-bold mb-3 text-secondary'>{data[active].title}</h1>
                    <p className='text-sm text-wrap'>{data[active].text}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        <div
          className='absolute hidden lg:block hover:text-black lg:-ml-16 text-3xl text-gray cursor-pointer top-1/2'
          onClick={handleBack}
        >
          <Back />
        </div>
        <div
          className='absolute hidden lg:block hover:text-black right-0 lg:-mr-10 text-3xl text-gray cursor-pointer top-1/2'
          onClick={handleNext}
        >
          <Forward />
        </div>
      </div>
      <div className='px-6 py-12 flex items-center justify-center gap-x-4'>
        <div className='text-primary font-medium'>Consulta nuestras preguntas frecuentes</div>
        <Link
          href='/faqs'
          className='text-white bg-secondary font-bold transition-all py-3 px-7 rounded-br-3xl hover:bg-black'
        >
          FAQs
        </Link>
      </div>
    </section>
  )
}

export default Guia
