import { useState } from 'react'
import ItemDestacadas from './ItemDestacadas'
import { Down } from '../../icons'
import { Button } from '../../ui'

const Destacadas = () => {
  const data = [
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: 'NUEVO LANZAMIENTO'
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: 'BANNER'
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: ''
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: 'NUEVO LANZAMIENTO'
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: 'NUEVO LANZAMIENTO'
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: 'BANNER'
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: ''
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: 'NUEVO LANZAMIENTO'
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: 'NUEVO LANZAMIENTO'
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: 'BANNER'
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: ''
    },
    {
      title: 'The JEM Private Residences',
      description: 'MIAMI WORLDCENTER',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      banner: 'NUEVO LANZAMIENTO'
    }
  ]

  const [show, setShow] = useState(5)

  return (
    <section id='destacadas'>
      <div className='w-full m-auto max-w-6xl pb-20 pt-6 px-6'>
        <div className='flex flex-col gap-y-2 items-center mb-4'>
          <h1 className='text-2xl lg:text-3xl text-secondary font-secondary font-bold'>Inversiones destacadas</h1>
          <a
            href='#destacadas'
            className='text-black/25 text-5xl scroll'
          >
            <Down />
          </a>
        </div>
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
      </div>
    </section>
  )
}

export default Destacadas
