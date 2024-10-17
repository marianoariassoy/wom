import { Pdf } from '../../components/icons'
import HTML from '../../hooks/useHTML'

const DetallesSeccion2 = ({ item }) => {
  // const rentyear = Number(item.rentyear).toLocaleString('es-ES') || 0
  // const rentmonth = Number(item.rentmonth).toLocaleString('es-ES') || 0

  return (
    <section className='flex flex-col lg:flex-row gap-12 py-12 border-b border-gray'>
      <div className='lg:w-4/6 flex flex-col gap-y-6 lg:gap-y-12'>
        <div className='text-xl'>
          <span className='text-primary font-medium'>{item.city} | </span>
          <span className='text-gray'>{item.location}</span>
        </div>
        <HTML text={item.description} />

        {item.pdf && (
          <div>
            <a
              href={item.pdf}
              target='_blank'
              rel='noreferrer'
              className='flex items-center'
            >
              <span className='bg-primary py-2 px-3 text-white font-medium text-sm hover:bg-black transition-colors'>
                BROCHURE
              </span>
              <span className='bg-secondary p-3 rounded-md text-white'>
                <span className='w-6 block'>
                  <Pdf />
                </span>
              </span>
            </a>
          </div>
        )}
      </div>
      <div className='lg:w-2/6 flex flex-col gap-y-3'>
        {item.rentability && (
          <article className='bg-light text-white px-12 py-4 flex flex-col items-center text-center'>
            <h3 className='text-primary tracking-wider font-medium'>
              RENTABILIDAD
              <br />
              ANUAL ESTIMADA
            </h3>
            <span className='font-bold text-2xl'>{item.rentability}</span>
          </article>
        )}
        {item.rentyear && (
          <article className='bg-light text-white px-12 py-4 flex flex-col items-center text-center'>
            <h3 className='text-primary tracking-wider font-medium'>
              ALQUILER
              <br />
              ANUAL
            </h3>
            <span className='font-bold text-2xl'>{item.rentyear}</span>
          </article>
        )}
        {item.rentmonth && (
          <article className='bg-light text-white px-12 py-4 flex flex-col items-center text-center'>
            <h3 className='text-primary tracking-wider font-medium'>
              ALQUILER
              <br />
              MENSUAL
            </h3>
            <span className='font-bold text-2xl'>{item.rentmonth}</span>
          </article>
        )}
      </div>
    </section>
  )
}

export default DetallesSeccion2
