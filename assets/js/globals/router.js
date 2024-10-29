import loadAll from '/assets/js/globals/loadComponents'
import pageTransition from '/assets/js/globals/transition'
import { setup404 } from '../../pages/404'
import { setupHome } from '../../pages/home'
import { setupPage2 } from '../../pages/page2'

// All the website's pages
const routes = {
  404: setup404,
  "/": setupHome,
  "/page2": setupPage2,
}

let currentPath = null

const route = (event) => { // Get the route
  event = event || window.event
  event.preventDefault()

  const href = event.target.href
  const currentPath = window.location.pathname

  if (href && href !== currentPath) {
    const targetPath = new URL(href).pathname
    if (targetPath !== currentPath) {
      window.history.pushState({}, "", href)
      handleLocation()
    }
  }
}

const handleLocation = async () => { // Change the page content
  const path = window.location.pathname
  if (path === currentPath) return

  const renderPage = routes[path] || routes[404]

  try {
    const pageContent = await renderPage()
    pageTransition(pageContent, path) // Page transition, animation on load and display content

    document.addEventListener('contentLoaded', () => {
      loadAll()
      document.querySelector('.page-container').id = path === '/' ? 'home' : path.split('/').join('')
      currentPath = path
    })
  } catch (error) {
    console.error(error)
  }
}

window.onpopstate = handleLocation
window.route = route
handleLocation()