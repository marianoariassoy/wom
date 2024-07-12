const DetallesSeccion3 = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-x-12 pt-12'>
      <div className='lg:w-4/6 flex flex-col gap-y-12'>
        <div className='flex flex-col gap-y-4'>
          <h2 className='text-primary font-medium text-xl'>Maps</h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13152.508166985968!2d-58.70303314999999!3d-34.499663399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca2c64c3a5073%3A0x43e1c4ed08a46994!2sChangoM%C3%A2s!5e0!3m2!1ses-419!2sar!4v1720812857549!5m2!1ses-419!2sar'
            width='100%'
            height='250'
            loading='lazy'
            className='rounded-2xl'
          ></iframe>
        </div>
        <div className='flex flex-col gap-y-4'>
          <h2 className='text-primary font-medium text-xl'>Street View</h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!3m2!1ses-419!2sar!4v1720813053635!5m2!1ses-419!2sar!6m8!1m7!1sWnTgthece8ypnQEsLzkJkA!2m2!1d-34.49942449085053!2d-58.71068034203915!3f344.93295!4f0!5f0.7820865974627469'
            width='100%'
            height='250'
            loading='lazy'
            className='rounded-2xl'
          ></iframe>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default DetallesSeccion3
