import { load } from "piecesjs";

const loadAll = () => {
  load('c-header', () => import('/assets/js/components/Header.js'))
}

export default loadAll