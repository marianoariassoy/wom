import { Pdf } from '../../components/icons'

const DetallesSeccion2 = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-12 py-12 border-b border-gray'>
      <div className='lg:w-4/6 flex flex-col gap-y-6 lg:gap-y-12'>
        <div className='text-xl'>
          <span className='text-primary font-medium'>Baltimore | </span>
          <span className='text-gray '>156 S Kossuth St.</span>
        </div>
        <div className=''>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div>
          <a
            href='#'
            target='_blank'
            className='flex items-center'
          >
            <span className='bg-primary py-2 px-3 text-white font-bold text-sm hover:bg-black transition-colors'>
              VER BROCHURE
            </span>
            <span className='bg-secondary p-3 rounded-md text-white'>
              <span className='w-6 block'>
                <Pdf />
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className='lg:w-2/6 flex flex-col gap-y-3'>
        <article className='bg-light text-white px-12 py-4 flex flex-col items-center text-center'>
          <h3 className='text-primary tracking-wider font-medium'>
            RENTABILIDAD
            <br />
            ANUAL ESTIMADA
          </h3>
          <span className='font-bold text-2xl'>10%</span>
        </article>
        <article className='bg-light text-white px-12 py-4 flex flex-col items-center text-center'>
          <h3 className='text-primary tracking-wider font-medium'>
            ALQUILER
            <br />
            ANUAL
          </h3>
          <span className='font-bold text-2xl'>$9.000</span>
        </article>
        <article className='bg-light text-white px-12 py-4 flex flex-col items-center text-center'>
          <h3 className='text-primary tracking-wider font-medium'>
            ALQUILER
            <br />
            MENSUAL
          </h3>
          <span className='font-bold text-2xl'>$750</span>
        </article>
      </div>
    </section>
  )
}

export default DetallesSeccion2
