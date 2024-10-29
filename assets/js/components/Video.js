import { Piece } from "piecesjs";


class Video extends Piece {
  constructor() {
    super('Video')
  }

  render() {
    const src = this.getAttribute('src')
    const type = src.split('.')[src.split('.').length - 1]
    const poster = this.getAttribute('poster') !== null ? `poster="${this.getAttribute('poster')}"` : ''
    const title = this.getAttribute('title') ? `title="${this.getAttribute('title')}"` : ''
    return `<video controls ${poster} ${title}>
      <source src="${src}" type="video/${type}">Your browser does not support the video tag.</source>
    </video>`
  }

  static get observedAttributes() {
    return ['src', 'poster', 'title']
  }
}

customElements.define('c-video', Video)