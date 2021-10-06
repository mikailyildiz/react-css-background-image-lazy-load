const { useEffect } = require('react')

const BgLazy = () => {
  useEffect(() => {
    const lazyloadBgImages = document.querySelectorAll('.bg-lazy')
    if (lazyloadBgImages.length == 0) return

    backgroundImageLazyLoad()

    window.addEventListener('scroll', () => {
      backgroundImageLazyLoad()
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  const backgroundImageLazyLoad = () => {
    const lazyloadBgImages = document.querySelectorAll('.bg-lazy')
    if (lazyloadBgImages.length == 0) return

    const scrollTop = window.pageYOffset
    for (let i = 0; i < lazyloadBgImages.length; i++) {
      const el = lazyloadBgImages[i]
      const offsetTop = el.getBoundingClientRect().top
      if (offsetTop < window.innerHeight + scrollTop) {
        el.classList.remove('bg-lazy')
        el.classList.add('bg-lazy-loaded')
      }
    }
  }
  return null
}
export default BgLazy
