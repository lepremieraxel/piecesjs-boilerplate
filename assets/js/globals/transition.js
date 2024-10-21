import gsap from "gsap"

let previousPage = window.location.pathname

const pageTransition = (data, targetPage) => {
  const currentPage = previousPage
  previousPage = targetPage

  if (!document.startViewTransition) {
    document.getElementById('page').innerHTML = data
    return
  }

  let transitionIn, transitionOut
  let resetAnim = { scale: 1, x: 0, y: 0, opacity: 0 }

  if (currentPage === '/' && targetPage === '/page2') {
    transitionOut = { opacity: 1, x: 0, duration: 0.5 }
    transitionIn = { opacity: 0, x: '-100vw', duration: 0.5 }
  } else if (currentPage === "/page2" && targetPage === "/") {
    transitionOut = { opacity: 1, scale: 0.8, duration: 0.5 }
    transitionIn = { opacity: 0, scale: 1, duration: 0.5 }
  } else {
    transitionOut = { opacity: 1, duration: 0.5 }
    transitionIn = { opacity: 0, duration: 0.5 }
  }

  if (currentPage === previousPage) {
    const tl = gsap.timeline()
    tl.to('.c-page-transition', {
      opacity: 1,
      zIndex: 999999,
      pointerEvents: 'all',
      duration: 0,
    })
    tl.to('.c-page-transition', {
      opacity: 0,
      zIndex: -1,
      pointerEvents: 'none',
      duration: 0.3
    }, "-=0.1")
  }

  const transition = document.startViewTransition(() => {

    gsap.to('.c-page-transition', {
      ...transitionOut,
      pointerEvents: 'all',
      zIndex: 999999,
      duration: 0.5,
      onComplete: () => {
        document.getElementById('page').innerHTML = data

        gsap.to('.c-page-transition', {
          ...transitionIn,
          pointerEvents: 'none',
          zIndex: -1,
          duration: 0.5,
          onComplete: () => {
            gsap.to('.c-page-transition', {
              ...resetAnim
            })
          }
        })
      }
    })
  })
}

export default pageTransition