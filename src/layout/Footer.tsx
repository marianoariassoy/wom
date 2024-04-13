import { Link } from 'wouter'
import Logo from '../assets/images/logo-footer.svg'

const Footer = () => {
  return (
    <footer className='bg-primary px-6 py-8 text-light text-sm flex flex-col gap-y-8 items-center pb-32 lg:pb-8'>
      <img
        src={Logo}
        alt='Logo'
        className='w-24 lg:w-auto'
      />
      <div className='flex flex-col lg:flex-row gap-2 text-center'>
        <span>&copy; Copyright 2024</span>
        <span className='hidden lg:block'>|</span>
        <span>Todos los derechos reservados</span>
        <span className='hidden lg:block'>|</span>
        <span>
          <Link href='/terminos-y-condiciones'>
            <a className='hover:text-white'>Términos y Condiciones</a>
          </Link>
        </span>
        <span className='hidden lg:block'>|</span>
        <span>
          <Link href='/politica-de-privacidad'>
            <a className='hover:text-white'>Política de Privacidad</a>
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
