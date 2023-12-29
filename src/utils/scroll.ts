const scroll = () => {
  const header = document.querySelector('.header') as HTMLElement

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    if (currentScroll > 50) {
      header?.classList.add('shadow-xl')
      return
    } else {
      header?.classList.remove('shadow-xl')
    }
  })

  const menuLinks = document.querySelectorAll('.scroll')

  menuLinks.forEach(link => {
    link.addEventListener('click', smoothScroll)
  })

  function smoothScroll(e) {
    e.preventDefault()
    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId)
    window.scrollTo({
      top: targetElement.offsetTop - 100,
      behavior: 'smooth'
    })
  }
}

export default scroll
