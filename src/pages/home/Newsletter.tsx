import { SocaloBottom } from '../../ui'
import FormNewsletter from './FormNewsletter'
import { Down } from '../../icons'

const Newsletter = () => {
  return (
    <section
      id='newsletter'
      className='text-white bg-tertiary'
    >
      <div className='w-full m-auto max-w-6xl px-6'>
        <div className='row m-auto max-w-3xl flex flex-col gap-y-12 justify-center mb-6'>
          <img
            src='./images/newsletter.svg'
            alt='Imagen de newsletter'
            className='w-full mt-6'
          />
          <h2 className='text-2xl text-center font-secondary font-bold'>
            Suscribirme para estar al día con las mejores oportunidades de inversión
          </h2>
          <div className='row mb-12'>
            <FormNewsletter />
          </div>
        </div>

        <SocaloBottom color='bg-primary'>
          <Down />
        </SocaloBottom>
      </div>
    </section>
  )
}

export default Newsletter
