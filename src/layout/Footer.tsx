import Logo from '../assets/images/logo-footer.svg'

const Footer = () => {
  return (
    <footer className='bg-primary px-6 py-8 text-light text-sm flex flex-col gap-y-8 items-center'>
      <img
        src={Logo}
        alt='Logo'
      />
      <div className='flex gap-x-3'>
        <span>&copy; Copyright 2024</span>
        <span>|</span>
        <span>Todos los derechos reservados</span>
        <span>|</span>
        <span>
          <a
            href='#'
            className='hover:text-white'
          >
            Términos y Condiciones
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
