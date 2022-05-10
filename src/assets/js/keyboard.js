
export class Keyboard  {

    elements = {
        main: null,
        keysContainer : null,
        title: null,
        textarea: null,
        description: null,
        language: null,
        keys: []
    }

    events = {
        oninput: null,
        onclose: null
    }

    properties = {
        value: '',
        capsLock: false,
        shift: false,
        shiftReal: false,
        alt: false,
        altReal: false,
        ctrl: false,
        ctrlReal: false,
        currentLanguage: 'ru',
        dictRu: [
            'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
            'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\", 'Del',
            'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
            'ShiftL', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'ShiftR',
            'CtrlL', 'Win', 'AltL', 'Space', 'AltR', '◄', '▼', '►', 'CtrlR'
        ],

        dictRuShiftFirstLine: {
            0: 'Ё', 1: '!', 2: '"', 3: '№', 4: ';', 5: '%', 6: ':', 7: '?', 8: '*', 9: '(', 10: ')', 11: '_', 12: '+', 27: '/', 52: ','
        },

        dictEn: [
            "`", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
            'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'Del',
            'CapsLock', "a", "s", "d", 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 
            'ShiftL', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',  '▲', 'ShiftR',
            'CtrlL', 'Win', 'AltL', 'Space', 'AltR', '◄', '▼', '►', 'CtrlR'
        ],

        dictEnShiftFirstLine: {
            0: '~', 1: '!', 2: '@', 3: '#', 4: '$', 5: '%', 6: '^', 7: '&', 8: '*', 9: '(', 10: ')', 11: '_', 12: '+', 25: '{', 26: '}', 27: '/', 39: ':', 40: '"', 50: '<', 51: '>', 52: '?'
        },

        shiftRuCode: {
            Digit1: '!',
            Digit2: '"',
            Digit3: '№',
            Digit4: ';',
            Digit5: '%',
            Digit6: ':',
            Digit7: '?',
            Digit8: '*',
            Digit9: '(',
            Digit0: ')',
            Minus: '_',
            IntlYen: '+',
            Equal: '+',
            Slash: ',',
            Backslash: '/',
        },

        shiftEnCode: {
            Backquote: '~',
            Digit1: '!',
            Digit2: '@',
            Digit3: '#',
            Digit4: '$',
            Digit5: '%',
            Digit6: '^',
            Digit7: '&',
            Digit8: '*',
            Digit9: '(',
            Digit0: ')',
            Minus: '_',
            IntlYen: '+',
            Equal: '+',
            Period: '>',
            Comma: '<',
            Backslash: '|',
            BracketLeft: '{',
            BracketRight: '}',
            Semicolon: ':',
            Quote: '"',
            Slash: '?',
        },

        unToggledKeys: [
            'backspace', 'tab', 'del', 'capslock', 'enter', 'shift', 'ctrl', 'win', 'alt', 'space'
        ],

        whichKeyRU: {
            220: 'ё', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9', 48: '0', 187: '-', 219: '=',
            81: 'й', 87: 'ц', 69: 'у', 82: 'к', 84: 'е', 89: 'н', 85: 'г', 73: 'ш', 79: 'щ', 80: 'з', 221: 'х', 186: 'ъ', 191: '\\',
            65: 'ф', 83: 'ы', 68: 'в', 70: 'а', 71: 'п', 72: 'р', 74: 'о', 75: 'л', 76: 'д', 192: 'ж', 222: 'э',
            90: 'я', 88: 'ч', 67: 'с', 86: 'м', 66: 'и', 78: 'т', 77: 'ь', 188: 'б', 190: 'ю', 189: '.', 38: '▲',
            37: '◄', 40: '▼', 39: '►',
        },

        whichKeyEN: {
            220: '`', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9', 48: '0', 187: '-', 219: '=',
            81: 'q', 87: 'w', 69: 'e', 82: 'r', 84: 't', 89: 'y', 85: 'u', 73: 'i', 79: 'o', 80: 'p', 221: '[', 186: ']', 191: '\\',
            65: 'a', 83: 's', 68: 'd', 70: 'f', 71: 'g', 72: 'h', 74: 'j', 75: 'k', 76: 'l', 192: ';', 222: "'",
            90: 'z', 88: 'x', 67: 'c', 86: 'v', 66: 'b', 78: 'n', 77: 'm', 188: ',', 190: '.', 189: '/', 38: '▲',
            37: '◄', 40: '▼', 39: '►',
        },

        codeKey: {            
            Backspace: 'Backspace',
            Tab: 'Tab',  
            Delete: 'Del',
            CapsLock: 'CapsLock',  
            Enter: 'Enter',
            ShiftLeft: 'Shift',  
            ArrowUp: 'Up',
            ShiftRight: 'Shift',
            ControlLeft: 'Ctrl',
            MetaLeft: 'Win',
            AltLeft: 'Alt',
            Space: 'Space',
            AltRight: 'Alt',
            ArrowLeft: 'Left',
            ArrowDown: 'Down',
            ControlRight: 'Ctrl'
        },

    }

    init() {
        this.getLocalStorage()
        this.elements.main = document.createElement('div');
        this.elements.title = document.createElement('h1');
        this.elements.textarea = document.createElement('textarea');
        this.elements.keysContainer = document.createElement('div');
        this.elements.description = document.createElement('p');
        this.elements.language = document.createElement('p');

        this.elements.main.classList.add('wrapper');
        this.elements.title.classList.add('title');
        this.elements.title.innerText = 'RSS Virtual Keyboard';
        this.elements.textarea.classList.add('input');
        this.elements.textarea.autofocus = true;
        this.elements.textarea.addEventListener('blur', () => {
            this.elements.textarea.focus();
          });        
        this.elements.keysContainer.classList.add('keyboard');
        this.elements.keysContainer.appendChild(this._createKeys(this.properties.currentLanguage));
        this.elements.keys = this.elements.keysContainer.querySelectorAll('.key');

        this.elements.description.classList.add('description');
        this.elements.description.innerText = 'Клавиатура создана в операционной системе Windows'
        this.elements.language.classList.add('language');
        this.elements.language.innerText = 'Для переключения языка комбинация: левыe ctrl + alt'

        this.elements.main.appendChild(this.elements.title);
        this.elements.main.appendChild(this.elements.textarea);
        this.elements.main.appendChild(this.elements.keysContainer);
        this.elements.main.appendChild(this.elements.description);
        this.elements.main.appendChild(this.elements.language);
        document.body.appendChild(this.elements.main);

        this._keyPress();
    }

    _createKeys(lang) {        
        const fragment = document.createDocumentFragment();
        let dict = (lang === 'ru') ? this.properties.dictRu : this.properties.dictEn
        
        dict.forEach(elem => {
            const keyElement = document.createElement('button');
            keyElement.setAttribute("type", "button");
            keyElement.classList.add('key');
            keyElement.textContent = elem;
            
            switch(elem) {
                case 'Backspace': 
                    keyElement.classList.add('back');

                    keyElement.addEventListener('click', () => {
                        this._backspaceKeyPress();                        
                    });
                    if (this.properties.shift) {
                        this._shift()
                    }
                    if (this.properties.alt) {
                        this._altKeyPress()
                    }
                    if (this.properties.ctrl) {
                        this._ctrlKeyPress()
                    }
                    break;
                case 'Tab':
                    keyElement.classList.add('m');

                    keyElement.addEventListener('click', () => {
                        this._tabKeyPress();                        
                    });
                    if (this.properties.shift) {
                        this._shift()
                    }
                    if (this.properties.alt) {
                        this._altKeyPress()
                    }
                    if (this.properties.ctrl) {
                        this._ctrlKeyPress()
                    }
                    break;
                case 'CapsLock':
                    keyElement.classList.add('xl', 'caps-acvivalible', 'caps');

                    keyElement.addEventListener('click', () => {
                        this._toggleCaps();
                        keyElement.classList.toggle('caps-active');                   
                    });
                    if (this.properties.alt) {
                        this._altKeyPress()
                    }
                    if (this.properties.ctrl) {
                        this._ctrlKeyPress()
                    }
                    break;
                case 'Enter':
                    keyElement.classList.add('xxl');

                    keyElement.addEventListener('click', () => {
                        this._enterKeyPress();
                        
                    });
                    if (this.properties.shift) {
                        this._shift()
                    }
                    if (this.properties.alt) {
                        this._altKeyPress()
                    }
                    if (this.properties.ctrl) {
                        this._ctrlKeyPress()
                    }
                    break;
                case 'ShiftL':
                    keyElement.classList.add('xl', 'shiftleft');
                    keyElement.textContent = 'Shift';

                    keyElement.addEventListener('click', () => {
                        this._shift();                        
                    });
                    if (this.properties.alt) {
                        this._altKeyPress()
                    }
                    if (this.properties.ctrl) {
                        this._ctrlKeyPress()
                    }
                    break;
                case 'ShiftR':
                    keyElement.classList.add('xl', 'shiftright');
                    keyElement.textContent = 'Shift';

                    keyElement.addEventListener('click', () => {
                        this._shift();                        
                    });
                    if (this.properties.alt) {
                        this._altKeyPress()
                    }
                    if (this.properties.ctrl) {
                        this._ctrlKeyPress()
                    }
                    break;
                case 'CtrlL':
                    keyElement.classList.add('l', 'ctrlleft');
                    keyElement.textContent = 'Ctrl';
                    keyElement.addEventListener('click', () => {
                        this._ctrlKeyPress();
                        this._changeLanguage()                        
                    });
                    
                    break;
                case 'CtrlR':
                    keyElement.classList.add('l', 'ctrlright');
                    keyElement.textContent = 'Ctrl';                    
                    if (this.properties.alt) {
                        this._altKeyPress()
                    }
                    if (this.properties.ctrl) {
                        this._ctrlKeyPress()
                    }
                    break;
                case 'Win':
                    keyElement.classList.add('l');
                    break;
                case 'AltL':
                    keyElement.classList.add('l', 'altleft');
                    keyElement.textContent = 'Alt';
                    keyElement.addEventListener('click', () => {
                        this._altKeyPress();
                        this._changeLanguage()                        
                    });
                    
                    break;
                case 'AltR':
                    keyElement.classList.add('l', 'altright');
                    keyElement.textContent = 'Alt';
                    if (this.properties.alt) {
                        this._altKeyPress()
                    }
                    if (this.properties.ctrl) {
                        this._ctrlKeyPress()
                    }
                    break;
                case 'Space':
                    keyElement.classList.add('space');

                    keyElement.addEventListener('click', () => {
                        this._spaceKeyPress();                        
                    });
                    if (this.properties.shift) {
                        this._shift()
                    }
                    if (this.properties.alt) {
                        this._altKeyPress()
                    }
                    if (this.properties.ctrl) {
                        this._ctrlKeyPress()
                    }
                    break;
                case 'Del':    
                    keyElement.addEventListener('click', () => {
                        this._delKeyPress();
                    });
                    if (this.properties.shift) {
                        this._shift()
                    }
                    if (this.properties.alt) {
                        this._altKeyPress()
                    }
                    if (this.properties.ctrl) {
                        this._ctrlKeyPress()
                    }
                    break;
                default:
                    keyElement.addEventListener('click', (e) => {
                        this._defaultKeyPress(e);
                        if (this.properties.shift) {
                            this._shift()
                        }
                        if (this.properties.alt) {
                            this._altKeyPress()
                        }
                        if (this.properties.ctrl) {
                            this._ctrlKeyPress()
                        }                        
                    });
            }
            this.elements.keysContainer.appendChild(keyElement);
        });

        return fragment
    }

    _defaultKeyPress(event) {
        let textarea = document.querySelector('.input');
        let position = textarea.selectionStart;
        let positionEnd = textarea.selectionEnd;
        let text = this.properties.value;
        let whichKey = (this.properties.currentLanguage === 'ru') ? this.properties.whichKeyRU : this.properties.whichKeyEN
        let shiftedType = (this.properties.currentLanguage === 'ru') ? this.properties.shiftRuCode : this.properties.shiftEnCode
        let letter
        
        if (typeof shiftedType[event.code] !== 'undefined' ) {
            letter = this.properties.shiftReal ? shiftedType[event.code] : whichKey[event.which]
            
        } else {
            letter = event.target.classList.contains('key') ? event.target.textContent : (this.properties.capsLock ? whichKey[event.which].toUpperCase() :  whichKey[event.which].toLowerCase() )
       
        }
        
        
        if (text.length + 1 !== position) {
            this.properties.value = text.slice(0, position) + letter + text.slice(positionEnd);
        } else {
            this.properties.value += letter;
        }
        textarea.value = this.properties.value;
        textarea.setSelectionRange(position + 1, position + 1);      
        
    }

    _backspaceKeyPress() {
        let textarea = document.querySelector('.input');
        let position = textarea.selectionStart;
        let positionEnd = textarea.selectionEnd;
        let text = this.properties.value;
        
        if (position === positionEnd) {
            
            
            if (text.length === position) {
                this.properties.value = text.slice(0, text.length - 1);
            } else {
                this.properties.value = text.slice(0, position - 1) + text.slice(positionEnd)                
            }
            textarea.value = this.properties.value;
            textarea.setSelectionRange(position - 1, position - 1);

        } else {
            this.properties.value = text.slice(0, position) + text.slice(positionEnd);
            textarea.value = this.properties.value;
            textarea.setSelectionRange(position, position);

        }
    }

    _delKeyPress() {
        let textarea = document.querySelector('.input');
        let position = textarea.selectionStart;
        let positionEnd = textarea.selectionEnd;
        let text = this.properties.value;
        
        if (position === positionEnd) {
            
            
            if (position === 0) {
                this.properties.value = text.slice(1);
            } else {
                this.properties.value = text.slice(0, position) + text.slice(positionEnd + 1)                
            }
            textarea.value = this.properties.value;
            textarea.setSelectionRange(position, position);

        } else {
            this.properties.value = text.slice(0, position) + text.slice(positionEnd);
            textarea.value = this.properties.value;
            textarea.setSelectionRange(position, position);

        }
    }

    _enterKeyPress() {
        let textarea = document.querySelector('.input');
        let position = textarea.selectionStart;
        let positionEnd = textarea.selectionEnd;
        let text = this.properties.value;
        
       
        if (text.length + 1 !== position) {
            this.properties.value = text.slice(0, position) + '\n' + text.slice(positionEnd);
        } else {
            this.properties.value += letter;
        }
        textarea.value = this.properties.value;
        textarea.setSelectionRange(position + 1, position + 1);
    }

    _spaceKeyPress() {
        let textarea = document.querySelector('.input');
        let position = textarea.selectionStart;
        let positionEnd = textarea.selectionEnd;
        let text = this.properties.value;
        
       
        if (text.length + 1 !== position) {
            this.properties.value = text.slice(0, position) + ' ' + text.slice(positionEnd);
        } else {
            this.properties.value += letter;
        }
        textarea.value = this.properties.value;
        textarea.setSelectionRange(position + 1, position + 1);
        
    }

    _tabKeyPress() {
        let textarea = document.querySelector('.input');
        let position = textarea.selectionStart;
        let positionEnd = textarea.selectionEnd;
        let text = this.properties.value;
        
       
        if (text.length + 1 !== position) {
            this.properties.value = text.slice(0, position) + '    ' + text.slice(positionEnd);
        } else {
            this.properties.value += letter;
        }
        textarea.value = this.properties.value;
        textarea.setSelectionRange(position + 4, position + 4);
    }

    _altKeyPress() {
        this.properties.alt = !this.properties.alt
    }

    _ctrlKeyPress() {
        this.properties.ctrl = !this.properties.ctrl
        
    }

    _shift() {  
        this.properties.shift = !this.properties.shift;
        
        if (this.properties.currentLanguage === 'ru') {
            for (let i in this.properties.dictRuShiftFirstLine)  {            
                if (this.elements.keys[i].textContent === this.properties.dictRu[i]) {
                    this.elements.keys[i].textContent = this.properties.dictRuShiftFirstLine[i];
                } else {
                    this.elements.keys[i].textContent = this.properties.dictRu[i];
                }       
            }
            
            this._toggleCaps()
        } else {
            for (let i in this.properties.dictEnShiftFirstLine)  {            
                if (this.elements.keys[i].textContent === this.properties.dictEn[i]) {
                    this.elements.keys[i].textContent = this.properties.dictEnShiftFirstLine[i];
                } else {
                    this.elements.keys[i].textContent = this.properties.dictEn[i];
                }       
            }
            
            this._toggleCaps()            
        }
        
    }

    _input(type) {
        switch(type) {
            case 'write': document.querySelector('.input').value = this.properties.value; break;
            case 'read': this.properties.value = document.querySelector('.input').value; break;
        }
    }

    _toggleCaps() {   
            
        this.properties.capsLock = !this.properties.capsLock;
        this.elements.keys.forEach(key => {              
            if (!this.properties.unToggledKeys.includes(key.innerText.toLowerCase())) {               
                key.textContent = this.properties.capsLock ? key.innerText.toUpperCase() : key.innerText.toLowerCase();
            }
        })        
    }


    _keyPress() {        
        document.querySelector('.input').addEventListener('keydown', (e) => {
            e.preventDefault();
            let keysSet = document.querySelectorAll('.key');
            let whichKey = (this.properties.currentLanguage === 'ru') ? this.properties.whichKeyRU : this.properties.whichKeyEN
            let shiftedType = (this.properties.currentLanguage === 'ru') ? this.properties.shiftRuCode : this.properties.shiftEnCode
            keysSet.forEach(elem => {
                if (this.properties.codeKey[e.code] === elem.textContent) {
                    switch (elem.textContent) {
                        case "Space": this._spaceKeyPress(); elem.classList.add('active'); break;
                        case 'Backspace': this._backspaceKeyPress(); elem.classList.add('active'); break;
                        case "Enter" : this._enterKeyPress(); elem.classList.add('active'); break;
                        case 'Shift':
                            if (e.code === 'ShiftLeft') {
                                document.querySelector('.shiftleft').classList.add('active');                                
                                
                            } else {
                                document.querySelector('.shiftright').classList.add('active');                                
                                
                            }
                            if (!this.properties.shiftReal) {
                                this.properties.shiftReal = true;
                                this._shift()                                
                            }
                            
                            break;
                        case 'CapsLock': 
                            this._toggleCaps();
                            elem.classList.toggle('caps-active');
                            elem.classList.add('active'); 
                            break;
                        case 'Tab': this._tabKeyPress(); elem.classList.add('active');break;
                        case 'Ctrl': 
                            if (e.code === 'ControlLeft') {                                
                                document.querySelector('.ctrlleft').classList.add('active');
                                if (!this.properties.ctrlReal) {
                                    this.properties.ctrlReal = true;
                                    this._changeLanguage()                                
                                }                             
                            } else {
                                document.querySelector('.ctrlright').classList.add('active');
                            }
                                                   
                        
                        
                            this._ctrlKeyPress();  break;
                        case 'Win': elem.classList.add('active'); break;
                        case 'Alt': 
                            if (e.code === 'AltLeft') {
                                document.querySelector('.altleft').classList.add('active');
                                if (!this.properties.altReal) {
                                    this.properties.altReal = true;
                                    this._changeLanguage()                            
                                }                             
                            } else {
                                document.querySelector('.altright').classList.add('active');
                            }                       
                            
                            this._altKeyPress(); 
                            break;
                        case 'Del': this._delKeyPress(); elem.classList.add('active'); break;
                        default: break;
                    }
                    
                } else if  (elem.textContent === shiftedType[e.code]) {                    
                    this._defaultKeyPress(e);
                    elem.classList.add('active')
                } else if (elem.textContent.toLowerCase() === whichKey[e.which]){
                    this._defaultKeyPress(e);
                    elem.classList.add('active')
                }
            })
        })

        document.querySelector('.input').addEventListener('keyup', (e) => {
            let keysSet = document.querySelectorAll('.key');
            let whichKey = (this.properties.currentLanguage === 'ru') ? this.properties.whichKeyRU : this.properties.whichKeyEN
            let shiftedType = (this.properties.currentLanguage === 'ru') ? this.properties.shiftRuCode : this.properties.shiftEnCode
            
            keysSet.forEach(elem => {
                if (this.properties.codeKey[e.code] === elem.textContent) {
                    elem.classList.remove('active');
                    if (this.properties.shift) {                               
                        this._shift();
                        this.properties.shiftReal = false
                    }
                    this.properties.altReal = false
                    this.properties.ctrlReal = false
                    
                } else if (elem.textContent.toLowerCase() === whichKey[e.which]) {
                   
                    elem.classList.remove('active')
                } else if (elem.textContent === shiftedType[e.code]) {
                    elem.classList.remove('active')
                }
            })
        })
    }


    _changeLanguage() {
        if ((this.properties.alt && this.properties.ctrl) || (this.properties.altReal && this.properties.ctrlReal)) {
            if (this.properties.currentLanguage === 'ru') {
                for (let i = 0; i < this.elements.keys.length; i++) {
                    let element = this.elements.keys[i].textContent.toLowerCase() 
                    if (!this.properties.unToggledKeys.includes(element)) {
                        this.elements.keys[i].textContent = this.properties.capsLock ? this.properties.dictEn[i].toUpperCase() : this.properties.dictEn[i]
                    }                
                    
                }
                this.properties.currentLanguage = 'en'
            } else {
                for (let i = 0; i < this.elements.keys.length; i++) { 
                    let element = this.elements.keys[i].textContent.toLowerCase() 
                    if (!this.properties.unToggledKeys.includes(element))  {               
                        this.elements.keys[i].textContent = this.properties.capsLock ? this.properties.dictRu[i].toUpperCase() : this.properties.dictRu[i]
                    }
                }
                this.properties.currentLanguage = 'ru'            
            }
            this.setLocalStorage()
            this.properties.alt = false
            this.properties.ctrl = false
            this.properties.altReal = false
            this.properties.ctrlReal = false
        } 
    }

    setLocalStorage() {
        localStorage.setItem('lang', this.properties.currentLanguage);
    }

    getLocalStorage() {
        if(localStorage.getItem('lang')) {
          this.properties.currentLanguage = localStorage.getItem('lang');         
        }    
      }
};

