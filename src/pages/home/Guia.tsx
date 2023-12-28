import { useState } from 'react'

const Guia = () => {
  const numbers = [1, 2, 3, 4, 5, 6]
  const [active, setActive] = useState(1)

  return (
    <section
      id='guia'
      className='bg-gray'
    >
      <div className='w-full m-auto max-w-6xl px-6 pt-6'>
        <h1 className='text-3xl text-primary font-secondary text-center mb-16'>Guía para el inversor</h1>

        <article className='flex items-center'>
          <div className='col lg:w-2/5 relative'>
            <div className='overflow-hidden aspect-[5/4]'>
              <img
                src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt=''
                className='w-full h-full content-center object-cover block absolute rounded-tl-2xl ml-14'
              />
            </div>
          </div>
          <div className='col lg:w-3/5 pr-20'>
            <div className='w-full shadow-main rounded-tl-3xl flex flex-col bg-white overflow-hidden pb-14'>
              <div className='bg-primary text-white pl-28 pr-6 py-8'>
                <h1 className='text-xl font-secondary mb-3'>¿Cómo invertir?</h1>
                <p className='text-sm'>Adquiere tu inmueble en Estados Unidos en forma sencilla</p>
              </div>
              <div className='pl-28 pt-12 pr-6'>
                <div className='flex items-center gap-x-3 mb-6'>
                  {numbers.map(number => (
                    <button
                      key={number}
                      className={`flex items-center justify-center w-10 h-10 rounded-full font-secondary text-white bg-secondary-hover ${
                        number === active ? 'bg-secondary' : 'bg-gray'
                      }`}
                      onClick={() => setActive(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
                <div>
                  <h1 className='text-xl font-secondary mb-3 text-secondary'>Contacto inicial</h1>
                  <p className='text-sm text-wrap'>
                    Coordina una reunión, llamada o videollamada con nuestros asesores. Apóyate en la trayectoria,
                    seriedad, honestidad y experiencia de nuestro equipo para conocer las mejores oportunidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className='px-6 py-12 flex items-center justify-center gap-x-4'>
        <div className='text-primary font-secondary'>Consulta nuestras preguntas frecuentes</div>
        <a
          href='#'
          className=' text-white bg-secondary transition-all py-3 px-7 rounded-br-3xl hover:bg-black'
        >
          FAQs
        </a>
      </div>
    </section>
  )
}

export default Guia
