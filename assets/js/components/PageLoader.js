import { Piece } from "piecesjs";

class PageLoader extends Piece {
  constructor() {
    super('PageLoader', {
      stylesheets: [() => import('/assets/css/components/page-loader.css')],
    });
  }
}

customElements.define('c-page-loader', PageLoader)