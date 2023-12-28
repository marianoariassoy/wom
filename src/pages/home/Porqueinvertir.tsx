import { SocaloBottom } from '../../ui'
import ItemPorqueinvertir from './ItemPorqueinvertir'

const items = [
  {
    title: 'Estabilidad económica',
    text: 'Estados Unidos tiene una de las economías más grandes y estables del mundo. A lo largo de su historia ha demostrado ser resistente a diversas crisis económicas, lo que brinda seguridad a los inversores.',
    color: 'bg-primary',
    icon: './icons/estabilidad.svg'
  },
  {
    title: 'Moneda fuerte',
    text: 'El dólar estadounidense es una de las principales monedas de reserva del mundo, lo que significa que es ampliamente aceptado y más estable en comparación con otras monedas.',
    color: 'bg-primary',
    icon: './icons/moneda.svg'
  },
  {
    title: 'Seguridad',
    text: 'El sistema legal de Estados Unidos proporciona una sólida protección a los derechos de propiedad y a los inversionistas. Puedes disfrutar del presente resguardando tu futuro.',
    color: 'bg-primary',
    icon: './icons/seguridad.svg'
  },
  {
    title: 'Simple',
    text: 'Invierte desde la comodidad de tu hogar asesorado por un equipo de profesionales experto en las inversiones en real estate en Estados Unidos.',
    color: 'bg-secondary',
    icon: './icons/simple.svg'
  },
  {
    title: 'Servicio integral',
    text: 'Acompañamos al inversor durante todo el proceso de la operación inmobiliaria y durante el tiempo que conserve la inversión. Ofrecemos opciones y proyectos totalmente administrados. Trabajamos con prestigiosos estudios jurídicos y contables para un correcto asesoramiento, presentamos a nuestros clientes ante entidades bancarias para la apertura de cuentas y ante mortgage brokers para tramitar préstamos hipotecarios.',
    color: 'bg-secondary',
    icon: './icons/servicio.svg'
  },
  {
    title: 'Rentabilidad',
    text: 'Dependiendo del mercado específico y el tipo de propiedad, las inversiones inmobiliarias en Estados Unidos ofrecen rendimientos atractivos a través del alquiler y la apreciación del inmueble con el correr del tiempo.',
    color: 'bg-secondary',
    icon: './icons/rentabilidad.svg'
  }
]

const Porqueinvertir = () => {
  return (
    <section
      id='porque'
      className='relative'
    >
      <div className='w-full m-auto max-w-6xl pt-20 px-6'>
        <h1 className='text-white text-center font-secondary text-3xl mb-12 font-bold'>¿Por qué invertir en EE.UU.?</h1>
        <div className='grid grid-cols-3 gap-8 mb-20'>
          {items.map((item, index) => (
            <ItemPorqueinvertir
              key={index}
              data={item}
            />
          ))}
        </div>
        <SocaloBottom color='bg-primary' />
      </div>
    </section>
  )
}

export default Porqueinvertir
