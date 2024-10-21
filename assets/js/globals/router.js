import loadAll from '/assets/js/globals/loadComponents'

const route = (event) => {
  event = event || window.event
  event.preventDefault()

  const href = event.target.href
  const currentPath = window.location.pathname

  const targetPath = new URL(href).pathname

  if (targetPath !== currentPath) {
    window.history.pushState({}, "", href)
    handleLocation()
  }
}

const routes = {
  404: "/pages/404.html",
  "/": "/pages/home.html",
  "/page2": "/pages/page2.html",
}

const handleLocation = async () => {
  const path = window.location.pathname
  const route = routes[path] || routes[404]
  const html = await fetch(route).then((data) => data.text())
  document.getElementById('page').innerHTML = html
  loadAll()
}

window.onpopstate = handleLocation
window.route = route

handleLocation()