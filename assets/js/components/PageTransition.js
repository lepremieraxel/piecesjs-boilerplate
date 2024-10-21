import { Piece } from "piecesjs";

class PageTransition extends Piece {
  constructor() {
    super('PageTransition', {
      stylesheets: [() => import('/assets/css/components/page-transition.css')],
    });
  }
}

customElements.define('c-page-transition', PageTransition)