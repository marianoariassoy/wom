import { Whatsapp } from '../../icons'

const Nosotros = () => {
  return (
    <section
      id='nosotros'
      className='bg-primary text-white'
    >
      <div className='w-full m-auto max-w-6xl pt-12 px-6 flex flex-col lg:flex-row gap-x-6'>
        <div className='col lg:w-2/5 lg:pr-12'>
          <img
            src='./images/nosotros.png'
            alt='Imagen sobre nosotros'
            className='w-full'
          />
        </div>
        <div className='col lg:w-3/5 flex flex-col gap-y-6 pr-6 lg:pt-6'>
          <h1 className='text-white font-secondary text-2xl lg:text-3xl font-bold'>Nosotros</h1>
          <p className='text-wrap text-sm'>
            Somos una empresa con más de diez años de trayectoria, orientada a la generación de oportunidades de
            negocios, apoyando a nuestros clientes en el cumplimiento de sus metas a lo largo de todo el proceso. <br />
            <br />
            Nuestro compromiso es hacer de cada transacción un negocio exitoso gracias al respaldo y la experiencia de
            nuestro equipo de expertos altamente capacitados con una trayectoria ética y responsable.
          </p>
          <p className='text-wrap font-secondary text-light text-xl font-medium'>
            Ofrecemos una amplia variedad de oportunidades de inversión inmobiliaria en las ciudades de Miami, Orlando,
            Baltimore, Birmingham, y muchas más!
          </p>
        </div>
      </div>
      <div className='px-6 py-12 flex items-center justify-center gap-x-4'>
        <div className='text-white font-secondary'>¡Consúltanos! Estamos para asesorarte</div>
        <a
          href='https://wa.me/19546690141'
          className=' text-white bg-whatsapp rounded-full transition-all h-14 text-xl aspect-square flex items-center justify-center shadow'
        >
          <Whatsapp />
        </a>
      </div>
    </section>
  )
}

export default Nosotros
