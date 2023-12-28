import { Down } from '../../icons'
import ItemDestacadas from './ItemDestacadas'

const Destacadas = () => {
  return (
    <section id='destacadas'>
      <div className='w-full m-auto max-w-6xl pb-20 pt-6 px-6'>
        <div className='flex flex-col gap-y-2 items-center mb-4'>
          <h1 className='text-3xl text-secondary font-secondary font-bold'>Inversiones destacadas</h1>
          <div className='text-gray-400 text-5xl'>
            <Down />
          </div>
        </div>

        <div className='destacadas-grid'>
          <ItemDestacadas />
          <ItemDestacadas />
          <ItemDestacadas />
          <ItemDestacadas />
          <ItemDestacadas />
        </div>
      </div>
    </section>
  )
}

export default Destacadas
