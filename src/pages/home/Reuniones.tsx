import { SocaloTop } from '../../ui'
import { Check } from '../../components/icons'

const Reuniones = () => {
  const data = [
    {
      text: 'La presentación de los mercados e inversiones posibles'
    },
    {
      text: 'La selección de las unidades'
    },
    {
      text: 'Acompañamiento en todo el proceso de compra, administración y posterior venta'
    }
  ]

  return (
    <section
      id='reuniones'
      className='bg-secondary'
    >
      <div className='w-full m-auto max-w-6xl pb-20 px-6'>
        <SocaloTop color='bg-gray' />

        <div className='flex flex-col items-start gap-y-12 pt-20 text-white'>
          <div className='flex flex-col lg:flex-row gap-6'>
            <div className='col lg:w-1/5'>
              <img
                src='./images/reuniones.jpg'
                alt='Imagen reuniones'
                className='w-full rounded-bl-3xl lg:rounded-none'
              />
            </div>
            <div className='col lg:w-2/5'>
              <h1 className='text-2xl mb-3 font-bold'>Solicita una reunión con nuestros asesores </h1>
              <p className='text-sm'>
                Recibe sin cargo el mejor asesoramiento para invertir en bienes raíces en Estados Unidos. Asesoramiento
                profesional personalizado para asistirte en cada paso de tu inversión. Un soporte integral que abarca:
              </p>
            </div>
            <div className='col lg:w-2/5 flex flex-col gap-y-3 font-medium'>
              {data.map((item, index) => (
                <div
                  key={index}
                  className='flex gap-x-3'
                >
                  <div className='text-3xl'>
                    <Check />
                  </div>
                  <div className='text-wrap'>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <a
              href='#contacto'
              className={`w-full scroll flex items-center text-white uppercase rounded-2xl px-6 h-14 font-medium text-sm hover:bg-black transition-colors bg-secondary-dark`}
            >
              Solicitar Reunión
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reuniones
