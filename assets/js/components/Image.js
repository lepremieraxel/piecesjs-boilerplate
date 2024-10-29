import { Piece } from "piecesjs";
import { useParallax } from "../globals/parallax";


class Image extends Piece {
  constructor() {
    super('Image', {
      stylesheets: [() => import('/assets/css/components/image.css')],
    })
  }

  render() {
    const src = this.getAttribute('src')
    const alt = this.getAttribute('alt') ? this.getAttribute('alt') : 'image'
    const caption = this.getAttribute('caption') ? this.getAttribute('caption') : ''
    const loading = this.getAttribute('loading') ? this.getAttribute('loading') : 'eager'
    return `<img src="${src}" title="${alt}" alt="${alt}" loading="${loading}">`
  }

  mount() {
    useParallax()
  }

  static get observedAttributes() {
    return ['src', 'alt', 'caption', 'loading']
  }
}

customElements.define('c-image', Image)