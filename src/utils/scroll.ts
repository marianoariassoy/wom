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
}

export default scroll
