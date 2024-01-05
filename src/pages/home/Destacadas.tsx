import { useState } from 'react'
import ItemDestacadas from './ItemDestacadas'
import { DownBig } from '../../components/icons'
import { Button } from '../../ui'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Destacadas = () => {
  const { data, loading } = useFetch(`/destacadas`)
  const [show, setShow] = useState(5)

  return (
    <section id='destacadas'>
      <div className='w-full m-auto max-w-6xl pb-20 pt-6 px-6'>
        <div className='flex flex-col gap-y-6 items-center mb-12'>
          <h1 className='text-2xl lg:text-3xl text-secondary font-secondary font-bold'>Inversiones destacadas</h1>
          <a
            href='#destacadas'
            className='text-black/25 text-5xl scroll hover:text-black'
          >
            <DownBig />
          </a>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <section>
            <div className='destacadas-grid mb-12'>
              {data.slice(0, show).map((item, index) => (
                <ItemDestacadas
                  key={index}
                  data={item}
                />
              ))}
            </div>
            <div className='flex justify-center items-start'>
              {show < data.length && (
                <div onClick={() => setShow(show + 6)}>
                  <Button color='bg-secondary'>Más inversiones</Button>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </section>
  )
}

export default Destacadas
