import { SocaloBottom, SocaloTop } from '../../ui'
import ItemIversiones from './ItemIversiones'

const Inversiones = () => {
  const items = [
    {
      title: 'MIAMI',
      type: 'Renta variable',
      rentatibility: '5.8%',
      from: 'USD 350.000',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'MIAMI',
      type: 'Renta variable',
      rentatibility: '5.8%',
      from: 'USD 350.000',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'MIAMI',
      type: 'Renta fija',
      rentatibility: '5.8%',
      from: 'USD 350.000',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'MIAMI',
      type: 'Renta fija',
      rentatibility: '5.8%',
      from: 'USD 350.000',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'MIAMI',
      type: 'Renta fija',
      rentatibility: '5.8%',
      from: 'USD 350.000',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'MIAMI',
      type: 'Renta fija',
      rentatibility: '5.8%',
      from: 'USD 350.000',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]

  return (
    <section id='inversiones'>
      <div className='w-full m-auto max-w-6xl px-6'>
        <SocaloTop color='bg-primary' />
        <div className='grid grid-cols-2 gap-8 py-20'>
          {items.map((item, index) => (
            <ItemIversiones
              key={index}
              data={item}
            />
          ))}
        </div>
        <SocaloBottom color='bg-gray' />
      </div>
    </section>
  )
}

export default Inversiones
