import FormContacto from './FormContacto'

const Contacto = () => {
  return (
    <section
      id='contacto'
      className='text-white bg-primary'
    >
      <div className='w-full m-auto max-w-6xl pb-16 px-6 flex flex-col lg:flex-row gap-6 pt-20'>
        <div className='col lg:w-3/5'>
          <FormContacto />
        </div>
        <div className='col lg:w-2/5 lg:px-12'>
          <p className='mb-3 text-xl'>
            Queremos que inviertas bien informado y así obtengas la máxima rentabilidad en la compra de tus bienes
            raíces.
          </p>
          <p>
            Contáctanos completando el formulario para resolver tus dudas y orientarte hacia una inversión inteligente.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contacto
