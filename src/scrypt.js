
import './assets/js/keyboard.js'
import { Keyboard } from './assets/js/keyboard.js'
import _ from './assets/styles/style.css'
//import favicon from './assets/favicon.ico'

let keyboard = new Keyboard ();

window.addEventListener('DOMContentLoaded', () => {
    keyboard.init();
})