import { Zoom } from '../../components/icons'
import Form from '../propiedades/Search'

const Propiedades = () => {
  return (
    <section
      className='flex flex-col bg-black relative'
      id='propiedades-banner'
    >
      <div className='bg-black/40'>
        <div className='w-full m-auto max-w-5xl py-16 lg:py-24 flex flex-col text-white items-center gap-y-6 px-6'>
          <div className='w-full text-2xl flex flex-col gap-y-3 items-center justify-center text-center'>
            <div className='text-xl lg:text-2xl'>
              <Zoom />
            </div>
            <span className='max-w-xl'>Encuentre las mejores opciones inmobiliarias en Estados Unidos</span>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Propiedades
