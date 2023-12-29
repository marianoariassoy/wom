import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className='header sticky top-0 z-50 bg-white pb-3 transition-all'>
        <Header />
      </header>
      <main>{children}</main>
      <Footer />
      <Menu />
    </>
  )
}

export default Layout
