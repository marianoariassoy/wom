import { useEffect } from 'react'
import { useLocation } from 'wouter'

const ScrollToTop = () => {
  const [location] = useLocation()

  useEffect(() => {
    const handlePopState = () => {
      window.scrollTo(0, 0)
    }

    window.addEventListener('popstate', handlePopState)
    window.scrollTo(0, 0)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [location])

  return null
}

export default ScrollToTop
