import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import Casosdeexito from './Casosdeexito'
import Contacto from './Contacto'
import Destacadas from './Destacadas'
import Guia from './Guia'
import Hero from './Hero'
import Inversiones from './Inversiones'
import Nosotros from './Nosotros'
import Porqueinvertir from './Porqueinvertir'
import Reuniones from './Reuniones'
import scroll from '../../utils/scroll'

const Index = () => {
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (location === '/contacto' || location === '/casos' || location === '/guia' || location === '/nosotros') {
      setTimeout(() => {
        const targetElement = document.querySelector(`#${location.split('/').pop()}`) as HTMLElement
        const target = targetElement.offsetTop
        window.scrollTo({
          top: target - 100,
          behavior: 'smooth'
        })
      }, 1000)
    }
  }, [location])

  useEffect(() => {
    scroll()
  }, [])

  return (
    <Layout>
      <Hero />
      <Destacadas />
      <Porqueinvertir />
      <Nosotros />
      <Inversiones />
      <Guia />
      <Reuniones />
      <Casosdeexito />
      <Contacto />
      <HeadProvider>
        <Title>WOM Latam</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
