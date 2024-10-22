import { load } from "piecesjs";

const loadAll = () => {
  load('c-header', () => import('/assets/js/components/Header.js'))
  load('c-page-transition', () => import('/assets/js/components/PageTransition.js'))
  load('c-page-loader', () => import('/assets/js/components/PageLoader.js'))
}

export default loadAll