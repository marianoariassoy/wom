import { useState, useEffect } from 'react'
import FormPopUp from './FormPopUp'
import Cookies from 'js-cookie'

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const popupShown = Cookies.get('popupShown')

    if (!popupShown) {
      setIsVisible(true)
      Cookies.set('popupShown', 'true', { expires: 1 })
    }
  }, [])

  const closePopup = () => {
    window.localStorage.setItem('popup', 'true')
    const popUp = document.getElementById('popUp')
    popUp?.classList.add('hidden')
  }

  if (isVisible)
    return (
      <div
        className='fade-in-delay h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 flex items-center justify-center p-6'
        id='popUp'
      >
        <div className='bg-white p-6 lg:p-2 shadow-xl w-full max-w-3xl flex flex-col lg:flex-row items-center relative'>
          <button
            className='text-2xl absolute text-white bg-primary w-10 h-10 rounded-full border-2 border-white -top-3 -right-3 hover:bg-black'
            onClick={closePopup}
          >
            X
          </button>
          <div className='w-full lg:w-2/3 text-center py-6 lg:p-16 flex flex-col gap-y-3'>
            <div className='text-2xl lg:text-3xl'>
              <h1 className='font-bold'>Suscríbete</h1>
              <h2>a nuestro newsletter</h2>
            </div>
            <p className='text-sm'>
              Gracias por visitar nuestro sitio web! ¿Quieres estar al día con las mejores oportunidades de inversión
              inmobiliaria en EE.UU.? Entonces regístrate aquí. <br />
              <br /> Prometemos que no saturaremos tu bandeja de entrada.
            </p>
            <FormPopUp />
          </div>
          <div className='w-full lg:w-1/3'>
            <img
              src='./images/popup-img.jpg'
              alt='Image popup'
              className='w-full hidden lg:block'
            />
            <img
              src='./images/popup-img-horizontal.jpg'
              alt='Image popup'
              className='w-full lg:hidden block'
            />
          </div>
        </div>
      </div>
    )
}

export default PopUp
