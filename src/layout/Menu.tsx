import { menu } from '../data'

const Menu = () => {
  const closeMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <section className='menu-mobile fixed top-0 left-0 fade-in h-screen w-screen bg-white z-40 text-primary hidden'>
      <div className='grid content-center w-full h-full text-center'>
        <nav onClick={closeMenu}>
          <ul className='flex flex-col text-2xl font-medium gap-y-2'>
            {menu.map((data, index) => (
              <li key={index}>
                <a
                  href={`#${data.title.toLowerCase().split(' ')[0]}`}
                  className='scroll'
                >
                  {data.title}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex flex-col gap-y-3 mt-12'>
            <a
              href='tel:549110867777'
              className='text-light hover:text-white'
            >
              ARG 54911 0867777
            </a>
            <a
              href='tel:305624098'
              className='text-light hover:text-white'
            >
              USA 305 624098
            </a>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Menu
