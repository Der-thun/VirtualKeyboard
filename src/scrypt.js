import { Keyboard } from './assets/js/keyboard';


import './assets/styles/style.css';
// import favicon from './assets/favicon.ico'

const keyboard = new Keyboard();


//window.addEventListener('load', keyboard.getLocalStorage());
window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
});
//window.addEventListener('beforeunload', keyboard.setLocalStorage());
