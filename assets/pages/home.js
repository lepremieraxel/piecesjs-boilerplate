import { fetchSanityData } from "../js/globals/client";

export const setupHome = async () => {
  const content = await fetchSanityData(`*[_type=='settings'][0]{description}`)

  const videoUrl = await fetchSanityData(`*[_type=='videoField'][0]{title, "video": video.asset->url, "poster": poster.asset->url}`)

  const imageUrl = await fetchSanityData(`*[_type=="settings"][0].image{"url": asset->url, crop, hotspot, alt, caption}`)

  let template = `
  <h2>Home</h2>
  <p class="animate-on-load" style="width: 300px; margin-top: 50px;">${content.description}</p>
  <p class="animate-on-load" style="width: 300px; margin-top: 50px;">${content.description}</p>
  <p class="animate-on-load" style="width: 300px; margin-top: 50px;">${content.description}</p>
  <p class="animate-on-load" style="width: 300px; margin-top: 50px;">${content.description}</p>
  <p class="animate-on-load" style="width: 300px; margin-top: 50px;">${content.description}</p>
  <p class="animate-on-load" style="width: 300px; margin-top: 50px;">${content.description}</p>
  `

  const videoEl = document.createElement('c-video')
  videoEl.classList.add('animate-on-load')
  if (videoUrl.video !== null) {
    videoEl.setAttribute('src', videoUrl.video)
    if (videoUrl.title !== null) {
      videoEl.setAttribute('title', videoUrl.title)
    }
    if (videoUrl.poster !== null) {
      videoEl.setAttribute('poster', videoUrl.poster)
    }
    // template += videoEl.outerHTML
  }

  const imageEl = document.createElement('c-image')
  imageEl.classList.add('animate-on-load')
  imageEl.style.height = '500px'
  if (imageUrl.url !== null) {
    const imageParams = `?h=500`
    imageEl.setAttribute('src', imageUrl.url + imageParams)
    if (imageUrl.alt !== null) {
      imageEl.setAttribute('alt', imageUrl.alt)
    }
    if (imageUrl.caption !== null) {
      imageEl.setAttribute('caption', imageUrl.caption)
    }
    imageEl.setAttribute('loading', 'eager')
    imageEl.setAttribute('data-parallax', '')
    template += imageEl.outerHTML
  }

  return template
}