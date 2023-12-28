import { SocaloTop } from '../../ui'
import { Check } from '../../icons'
import FormReuniones from './FormReuniones'

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

        <div className='flex flex-col gap-y-12 pt-20 text-white'>
          <div className='flex gap-x-12'>
            <div className='col w-1/5'>
              <img
                src='./images/reuniones.jpg'
                alt='Imagen reuniones'
                className='w-full'
              />
            </div>
            <div className='col w-2/5'>
              <h1 className='text-2xl font-secondary mb-3 font-medium'>Solicita una reunión con nuestros asesores </h1>
              <p className='text-sm text-wrap'>
                Recibe sin cargo el mejor asesoramiento para invertir en bienes raíces en Estados Unidos. Asesoramiento
                profesional personalizado para asistirte en cada paso de tu inversión. Un soporte integral que abarca:
              </p>
            </div>
            <div className='col w-2/5 flex flex-col gap-y-3 font-secondary font-bold'>
              {data.map((item, index) => (
                <div
                  key={index}
                  className='flex gap-x-3'
                >
                  <div className='text-3xl'>
                    <Check />
                  </div>
                  <div>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
          <FormReuniones />
        </div>
      </div>
    </section>
  )
}

export default Reuniones
