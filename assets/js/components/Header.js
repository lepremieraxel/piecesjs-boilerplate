import { Piece } from "piecesjs";

class Header extends Piece {
  constructor() {
    super('Header', {
      stylesheets: [() => import('/assets/css/components/header.css')],
    });
  }

  render() {
    return `
    <header>
      <nav>
        <a href="/" onclick="route()">Home</a>
        <a href="/page2" onclick="route()">Page 2</a>
      </nav>
    </header>
    `
  }
}

customElements.define('c-header', Header)