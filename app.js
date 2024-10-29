import { useSmoothScroll } from './assets/js/globals/smoothScroll';
import loadAll from '/assets/js/globals/loadComponents'

const style = "font-weight: 700; font-family: sans-serif; color: black; background: white; padding: 10px;";

console.log('%c' + "Website made by Axel Marcial. (https://axelmarcial.com/)\r\nBased on my own boilerplate, using Pieces.js for components, a custom router for routing, Sanity for content and GSAP for animations.", style);
console.log('%c' + "Pieces.js : https://github.com/piecesjs/piecesjs/\r\nSanity : https://www.sanity.io/\r\nGSAP : https://gsap.com/\r\nGithub Template of the boilerplate : https://github.com/lepremieraxel/piecesjs-boilerplate/", style);

// IMPORT COMPONENTS
loadAll()
useSmoothScroll()