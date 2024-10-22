import gsap from "gsap"

let previousPage = window.location.pathname
const pageLoaderElement = document.querySelector('.c-page-loader')
const pageTransitionElement = document.querySelector('.c-page-transition')

const isFirstVisit = () => {
  return sessionStorage.getItem('firstVisit') === null;
}

const displayContent = (data) => {
  document.getElementById('page').innerHTML = data

}

const pageTransition = (data, targetPage) => {
  if (!document.startViewTransition) {
    displayContent(data)
    animateOnLoad()
    pageLoaderElement.parentNode.removeChild(pageLoaderElement)
    pageTransitionElement.parentNode.removeChild(pageTransitionElement)
    return
  }

  const currentPage = previousPage
  previousPage = targetPage

  if (isFirstVisit() && document.body.contains(pageLoaderElement)) {
    sessionStorage.setItem('firstVisit', 'done')
    firstVisitTransition(data, currentPage)
  } else {
    sessionStorage.setItem('firstVisit', 'done')
    startPageTransition(data, currentPage, targetPage)
  }
}

const firstVisitTransition = (data, currentPage) => {
  document.startViewTransition(() => {
    const tl = gsap.timeline()

    if (currentPage === '/') {
      tl.to(pageLoaderElement, {
        opacity: 1,
        zIndex: 999999,
        pointerEvents: 'all',
        duration: 0
      }).to(pageLoaderElement, {
        opacity: 1,
        duration: 2,
        onComplete: () => {
          displayContent(data)
          tl.to(pageLoaderElement, {
            opacity: 0,
            zIndex: -1,
            pointerEvents: 'none',
            duration: 0.5,
            onComplete: () => {
              pageLoaderElement.parentNode.removeChild(pageLoaderElement)
              animateOnLoad()
            }
          })
        }
      })
    }
  })
}

const startPageTransition = (data, currentPage, targetPage) => {
  let transitionIn, transitionOut
  let resetAnim = { scale: 1, x: 0, y: 0, opacity: 0 }

  const tl = gsap.timeline()

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
    tl.to(pageTransitionElement, {
      opacity: 1,
      zIndex: 999999,
      pointerEvents: 'all',
      duration: 0,
    }).to(pageTransitionElement, {
      opacity: 0,
      zIndex: -1,
      pointerEvents: 'none',
      duration: 0.3,
      onComplete: animateOnLoad
    }, "-=0.1")
  }

  document.startViewTransition(() => {

    tl.to(pageTransitionElement, {
      ...transitionOut,
      pointerEvents: 'all',
      zIndex: 999999,
      duration: 0.5,
      onComplete: () => {
        displayContent(data)

        tl.to(pageTransitionElement, {
          ...transitionIn,
          pointerEvents: 'none',
          zIndex: -1,
          duration: 0.5,
          onComplete: () => {
            animateOnLoad()
            tl.to(pageTransitionElement, resetAnim)
          }
        })
      }
    })
  })
}

const animateOnLoad = () => {
  gsap.from('.animate-on-load', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
  })
}

export default pageTransition