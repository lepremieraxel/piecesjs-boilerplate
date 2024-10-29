import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

export const useParallax = () => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.utils.toArray('[data-parallax]').forEach(container => {
    const img = container.querySelector('img')
    gsap.to(img, {
      yPercent: -12.5,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        scrub: 0,
        start: 'top bottom',
        end: `bottom top`,
        // markers: true,
      }
    })
  })
}