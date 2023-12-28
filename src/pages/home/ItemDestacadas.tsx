import Image from '../../components/Image'

const ItemDestacadas = () => {
  return (
    <article className='rounded-bl-3xl overflow-hidden relative'>
      <div className='absolute -right-14 top-10 bg-secondary text-white font-medium w-full py-3 z-20 text-sm text-center rotate-[30deg]'>
        NUEVO LANZAMIENTO
      </div>
      <div className='absolute hover:bg-black/15 hover:backdrop-blur w-full h-full top-0 z-10 transition-all cursor-pointer p-6 flex flex-col justify-end'>
        <div className='bg-white p-6 rounded-bl-3xl'>
          <h2 className='text-primary font-secondary'>The JEM Private Residences</h2>
          <h2 className='text-gray-400 text-sm'>MIAMI WORLDCENTER</h2>
        </div>
      </div>
      <Image
        src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='image'
      />
    </article>
  )
}

export default ItemDestacadas
