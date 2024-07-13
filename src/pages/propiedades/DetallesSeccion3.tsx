const DetallesSeccion3 = ({ item }) => {
  return (
    <section className='flex flex-col lg:flex-row gap-x-12 pt-12'>
      <div className='lg:w-4/6 flex flex-col gap-y-12'>
        {item.maps && (
          <div className='flex flex-col gap-y-4'>
            <h2 className='text-primary font-medium text-xl'>Maps</h2>
            <iframe
              src={`https://www.google.com/maps/embed?pb=${item.maps}`}
              width='100%'
              height='250'
              loading='lazy'
              className='rounded-2xl'
            ></iframe>
          </div>
        )}

        <div className='flex flex-col gap-y-4'>
          <h2 className='text-primary font-medium text-xl'>Street View</h2>
          {item.streetview && (
            <iframe
              src={`https://www.google.com/maps/embed?pb=${item.streetview}`}
              width='100%'
              height='250'
              loading='lazy'
              className='rounded-2xl'
            ></iframe>
          )}
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default DetallesSeccion3
