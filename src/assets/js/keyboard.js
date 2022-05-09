/*const dictRu = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\", 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'
]

const dictRuShiftFirstLine = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+' 
]


const witchKey = {
    192: 'ё', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9', 48: '0', 187: '-', 219: '=', 8: 'Backspace',
    9: 'Tab', 81: 'й', 87: 'ц', 69: 'у', 82: 'к', 84: 'е', 89: 'н', 85: 'г', 73: 'ш', 79: 'щ', 80: 'з', 129: 'х', 221: 'ъ', 191: '\\', 46: 'Del',
    20: 'Caps', 65: 'ф', 83: 'ы', 68: 'в', 70: 'а', 71: 'п', 72: 'р', 74: 'о', 75: 'л', 76: 'д', 192: 'ж', 222: 'э', 13: 'Enter',
    16: 'Shift', 90: 'я', 88: 'ч', 67: 'с', 86: 'м', 66: 'и', 78: 'т', 77: 'ь', 188: 'б', 190: 'ю', 191: '.', 38: '▲', 16: 'Shift',
    17: 'Ctrl', 91: 'Win', 18: 'Alt', 32: 'Space', 37: '◄', 40: '▼', 39: '►', 17: 'Ctrl'
    };

const dictEn = [
    "`", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'Del',
    'CapsLock', "a", "s", "d", 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',  'Up', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'
];

const dictEnShiftFirstLine = [
    '¬', '!', '"', '£', '$', '%', '^', '&', '*', '(', ')', '_', '+' 
];

*/
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
        dictRu: [
            'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
            'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\", 'Del',
            'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
            'ShiftL', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'ShiftR',
            'CtrlL', 'Win', 'AltL', 'Space', 'AltR', '◄', '▼', '►', 'CtrlR'
        ],
        dictRuShiftFirstLine: [
            'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+' 
        ],

        unToggledKeys: [
            'backspace', 'tab', 'del', 'capslock', 'enter', 'shift', 'ctrl', 'win', 'alt', 'space'
        ],

        whichKey: {
            220: 'ё', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9', 48: '0', 187: '-', 219: '=', /*8: 'backspace',*/
            /*9: 'tab',*/ 81: 'й', 87: 'ц', 69: 'у', 82: 'к', 84: 'е', 89: 'н', 85: 'г', 73: 'ш', 79: 'щ', 80: 'з', 221: 'х', 186: 'ъ', 191: '\\',// 46: 'del',
            /*20: 'capslock', */65: 'ф', 83: 'ы', 68: 'в', 70: 'а', 71: 'п', 72: 'р', 74: 'о', 75: 'л', 76: 'д', 192: 'ж', 222: 'э',// 13: 'enter',
            /*16: 'shift',*/ 90: 'я', 88: 'ч', 67: 'с', 86: 'м', 66: 'и', 78: 'т', 77: 'ь', 188: 'б', 190: 'ю', 189: '.', 38: '▲',/* 16: 'shift',*/
            /*17: 'ctrl', 91: 'Win', 18: 'alt', 32: 'space', */37: '◄', 40: '▼', 39: '►',/* 17: 'ctrl'*/
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

        codeArray : [
            'Backspace',
            'Tab',  
            'Delete',
            'CapsLock',  
            'Enter',
            'ShiftLeft',
            'ShiftRight',
            'ControlLeft',
            'MetaLeft',
            'AltLeft',
            'Space',
            'AltRight',
            'ControlRight'
        ]
    }

    init() {
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
        this.elements.keysContainer.appendChild(this._createKeys());
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

    _createKeys() {
        const fragment = document.createDocumentFragment();

        this.properties.dictRu.forEach(elem => {
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
                    break;
                case 'Tab':
                    keyElement.classList.add('m');

                    keyElement.addEventListener('click', () => {
                        this._tabKeyPress();                        
                    });
                    if (this.properties.shift) {
                        this._shift()
                    }
                    break;
                case 'CapsLock':
                    keyElement.classList.add('xl', 'caps-acvivalible', 'caps');

                    keyElement.addEventListener('click', () => {
                        this._toggleCaps();
                        keyElement.classList.toggle('caps-active');                   
                    });
                    break;
                case 'Enter':
                    keyElement.classList.add('xxl');

                    keyElement.addEventListener('click', () => {
                        this._enterKeyPress();
                        
                    });
                    if (this.properties.shift) {
                        this._shift()
                    }
                    break;
                case 'ShiftL':
                    keyElement.classList.add('xl', 'shiftleft');
                    keyElement.textContent = 'Shift';

                    keyElement.addEventListener('click', () => {
                        this._shift();                        
                    });
                    break;
                case 'ShiftR':
                    keyElement.classList.add('xl', 'shiftright');
                    keyElement.textContent = 'Shift';

                    keyElement.addEventListener('click', () => {
                        this._shift();                        
                    });
                    break;
                case 'CtrlL':
                    keyElement.classList.add('l', 'ctrlleft');
                    keyElement.textContent = 'Ctrl';

                    this._ctrlKeyPress();
                    break;
                case 'CtrlR':
                    keyElement.classList.add('l', 'ctrlright');
                    keyElement.textContent = 'Ctrl';

                    this._ctrlKeyPress();
                    break;
                case 'Win':
                    keyElement.classList.add('l');
                    break;
                case 'AltL':
                    keyElement.classList.add('l', 'altleft');
                    keyElement.textContent = 'Alt';

                    this._altKeyPress();
                    break;
                case 'AltR':
                    keyElement.classList.add('l', 'altright');
                    keyElement.textContent = 'Alt';

                    this._altKeyPress();
                    break;
                case 'Space':
                    keyElement.classList.add('space');

                    keyElement.addEventListener('click', () => {
                        this._spaceKeyPress();                        
                    });
                    if (this.properties.shift) {
                        this._shift()
                    }
                    break;
                case 'Del':    
                    keyElement.addEventListener('click', () => {
                        this._delKeyPress();
                    });
                    if (this.properties.shift) {
                        this._shift()
                    }
                    break;
                default:
                    keyElement.addEventListener('click', (e) => {
                        this._defaultKeyPress(e);
                        if (this.properties.shift) {
                            this._shift()
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
        let letter = event.target.classList.contains('key') ? event.target.textContent : (this.properties.shiftReal ? this.properties.whichKey[event.which].toUpperCase() : this.properties.whichKey[event.which].toLowerCase())
       
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
        this._input('read');
        this.properties.value += '\n';
        this._input('write');
    }

    _spaceKeyPress() {
        this._input('read');
        this.properties.value += ' ';
        this._input('write');
    }

    _tabKeyPress() {
        this._input('read');
        this.properties.value += '    ';
        this._input('write');
    }

    _altKeyPress() {

    }

    _ctrlKeyPress() {

    }

    _shift() {
        console.log('!!!')
        this.properties.shift = !this.properties.shift; 
        for (let i = 0; i < this.properties.dictRuShiftFirstLine.length; i++)  {            
            if (this.elements.keys[i].textContent === this.properties.dictRu[i]) {
                this.elements.keys[i].textContent = this.properties.dictRuShiftFirstLine[i];
            } else {
                this.elements.keys[i].textContent = this.properties.dictRu[i];
            }       
        }
        
        this._toggleCaps()
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
           // console.log(e.code)
            keysSet.forEach(elem => {
               // console.log(e.code)
                if (this.properties.codeKey[e.code] === elem.textContent) {
                //if (this.properties.codeArray.includes(e.code)) {   
                    console.log(e.code)
                    //console.log(elem.textContent)
                    
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
                            } else {
                                document.querySelector('.ctrlright').classList.add('active');
                            }
                        
                        
                        
                            this._ctrlKeyPress();  break;
                        case 'Win': elem.classList.add('active'); break;
                        case 'Alt': 
                            if (e.code === 'AltLeft') {
                                document.querySelector('.altleft').classList.add('active');                            
                            } else {
                                document.querySelector('.altright').classList.add('active');
                            }                       
                            
                            this._altKeyPress(); 
                            break;
                        case 'Del': this._delKeyPress(); elem.classList.add('active'); break;
                        default: break;
                    }
                    
                } else if (elem.textContent.toLowerCase() === this.properties.whichKey[e.which]) {                    
                    switch (elem.textContent) {
                        //case "Enter" : this._enterKeyPress(); break;
                        /*case 'Shift':
                            if (!this.properties.shift) {                               
                                this._shift();
                            }
                            break;
                        */
                        //case "Space": this._spaceKeyPress(); break;
                        /*case 'CapsLock': 
                            this._toggleCaps();
                            elem.classList.toggle('caps-active'); 
                            break;
                            */
                        //case 'Backspace': this._backspaceKeyPress(); break;
                        /*case 'Tab': this._tabKeyPress(); break;
                        case 'Ctrl': this._ctrlKeyPress(); break;
                        case 'Win': break;
                        case 'Alt': this._altKeyPress(); break;
                        case 'Del': this._delKeyPress(); break;*/
                        default: 
                            this._defaultKeyPress(e);
                            if (this.properties.shift) {
                               // this._shift();
                            }
                    }                   
                    
                    elem.classList.add('active')
                } 
            })
        })

        document.querySelector('.input').addEventListener('keyup', (e) => {
            let keysSet = document.querySelectorAll('.key');
            keysSet.forEach(elem => {
                if (this.properties.codeKey[e.code] === elem.textContent) {
                    elem.classList.remove('active');
                    if (this.properties.shift) {                               
                        this._shift();
                        this.properties.shiftReal = false
                    }
                    
                } else if (elem.textContent.toLowerCase() === this.properties.whichKey[e.which]) {
                   
                    elem.classList.remove('active')
                }
            })
        })
    }
};

