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
        <ul>
          <li>
            <a href="/" onclick="route()">Home</a>
          </li>
          <li>
            <a href="/page2" onclick="route()">Page 2</a>
          </li>
        </ul>
      </nav>
    </header>
    `
  }
}

customElements.define('c-header', Header)