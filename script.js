/* eslint-disable no-undef */
let ArrayKeyboard =[
    ['Backquote', 'ё', 'Ё', '`', '~'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '"', '2', '@'],
    ['Digit3', '3', '№', '3', '#'],
    ['Digit4', '4', ';', '4', '$'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', ':', '6', '^'],
    ['Digit7', '7', '?', '7', '&'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'й', 'Й', 'q', 'Q'],
    ['KeyW', 'ц', 'Ц', 'w', 'W'],
    ['KeyE', 'у', 'У', 'e', 'E'],
    ['KeyR', 'к', 'К', 'r', 'R'],
    ['KeyT', 'е', 'Е', 't', 'T'],
    ['KeyY', 'н', 'Н', 'y', 'Y'],
    ['KeyU', 'г', 'Г', 'u', 'U'],
    ['KeyI', 'ш', 'Ш', 'i', 'I'],
    ['KeyO', 'щ', 'Щ', 'o', 'O'],
    ['KeyP', 'з', 'З', 'p', 'P'],
    ['BracketLeft', 'х', 'Х', '[', '{'],
    ['BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['Backslash', '\\', '//', '\\', '|'],
    ['Delete', 'DEL', 'DEL', 'DEL', 'DEL'],
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'ф', 'Ф', 'a', 'A'],
    ['KeyS', 'ы', 'Ы', 's', 'S'],
    ['KeyD', 'в', 'В', 'd', 'D'],
    ['KeyF', 'а', 'А', 'f', 'F'],
    ['KeyG', 'п', 'П', 'g', 'G'],
    ['KeyH', 'р', 'Р', 'h', 'H'],
    ['KeyJ', 'о', 'О', 'j', 'J'],
    ['KeyK', 'л', 'Л', 'k', 'K'],
    ['KeyL', 'д', 'Д', 'l', 'L'],
    ['Semicolon', 'ж', 'Ж', ';', ':'],
    ['Quote', 'э', 'Э', '\'', '"'],
    ['Enter', 'ENTER', 'ENTER', 'ENTER', 'ENTER'],
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'я', 'Я', 'z', 'Z'],
    ['KeyX', 'ч', 'Ч', 'x', 'X'],
    ['KeyC', 'с', 'С', 'c', 'C'],
    ['KeyV', 'м', 'М', 'v', 'V'],
    ['KeyB', 'и', 'И', 'b', 'B'],
    ['KeyN', 'т', 'Т', 'n', 'N'],
    ['KeyM', 'ь', 'Ь', 'm', 'M'],
    ['Comma', 'б', 'Б', ',', '<'],
    ['Period', 'ю', 'Ю', '.', '>'],
    ['Slash', '.', ',', '/', '?'],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', '&nbsp', '&nbsp', '&nbsp', '&nbsp'],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']];

let arrayKeyCodeChange = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15 , 16, 17 ,18 ,19, 20, 21 , 22, 23, 24, 25, 26, 27, 30, 31, 32 , 33, 34, 35, 36, 37, 38, 39, 40, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];

let ArrayKeyChange = [];
for (let i = 0; i < arrayKeyCodeChange.length; i++){
    ArrayKeyChange[i] = ArrayKeyboard[arrayKeyCodeChange[i]];       
} 

let sheetDiv = document.createElement('div');
sheetDiv.className = 'input_sheet';
document.querySelector('body').insertAdjacentElement('beforeend', sheetDiv);

let keyboardDiv = document.createElement('div');
keyboardDiv.className = 'keyboarder_wrapper';
document.querySelector('body').insertAdjacentElement('beforeend', keyboardDiv);

//добовление строк
for (let i = 1; i <= 5; i++){
    let rowDiv = document.createElement('div');    
    let nameRowDiv = 'row'+ i;
    rowDiv.className = nameRowDiv;
    rowDiv.classList.add('row');
    document.querySelector('body > div.keyboarder_wrapper').insertAdjacentElement('beforeend', rowDiv); 
}

//заполенение строк Div    
    for (let i = 0; i < 64; i++) {
        let  tempDiv = document.createElement('div');
        tempDiv.className = 'item';        
        tempDiv.id = ArrayKeyboard[i][0];  
        tempDiv.innerHTML = ArrayKeyboard[i][1];
        if (0 <= i && i <= 13) {
            document.querySelector('.row1').insertAdjacentElement('beforeend', tempDiv); 
        } else if (13 < i && i <= 28){
            document.querySelector('.row2').insertAdjacentElement('beforeend', tempDiv);
        } else if (28 < i && i <= 41) {
            document.querySelector('.row3').insertAdjacentElement('beforeend', tempDiv);
        } else if (31 < i && i <= 54) {
            document.querySelector('.row4').insertAdjacentElement('beforeend', tempDiv);
        } else if (54 < i && i <= 63) {
            document.querySelector('.row5').insertAdjacentElement('beforeend', tempDiv);
        }
    }
 
    for (let i = 0; i < ArrayKeyChange.length; i++){
        let a = ArrayKeyChange[i][0];           
        document.querySelector('#' + a).classList.add('itemChange');
    }

function changeKeyboard (numberKey) {
    for (let i = 0; i < ArrayKeyChange.length; i++){
        let a = ArrayKeyChange[i][0];
        let b = ArrayKeyChange[i][numberKey];    
        document.querySelector('#' + a).innerHTML = b;
    }
}

document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '|');
let numKeyboard;
let SocketValue = localStorage.getItem('numSocket');
(SocketValue == 'en') ? (changeKeyboard(3), numKeyboard = 3)  : (changeKeyboard(1), numKeyboard = 1)
console.log (SocketValue);

const clickDownMouse = (event) => {
    
    if ((event.target.id == 'CapsLock') || (event.code == 'CapsLock')) {
        if ((numKeyboard == 1) || (numKeyboard == 3)) {
            numKeyboard = numKeyboard + 1;
            changeKeyboard(numKeyboard);                    
            document.querySelector('#CapsLock').classList.add('clickBtnCape');       
        } else {
            numKeyboard = numKeyboard - 1;
            changeKeyboard(numKeyboard);            
            document.querySelector('#CapsLock').classList.remove('clickBtnCape');     
        }       
    } 
    document.querySelector('div.input_sheet').lastChild.remove();
        
    
    if ((event.target.id == 'AltLeft') || (event.code == 'AltLeft')){
        document.querySelector('#AltLeft').classList.add('clickBtnCape');
    }  
    if ((event.target.id == 'ControlLeft') || (event.code == 'ControlLeft')) {
        document.querySelector('#ControlLeft').classList.add('clickBtnCape');
    } 
    if ((event.target.id == 'ShiftLeft')  || (event.code == 'ShiftLeft')){
        document.querySelector('#ShiftLeft').classList.add('clickBtnCape');
        if ((document.querySelector('#AltLeft').classList[1] == 'clickBtnCape') || (document.querySelector    ('#ControlLeft').classList[1] == 'clickBtnCape')) {
            if ((numKeyboard == 1) || (numKeyboard == 2)) {
                numKeyboard = numKeyboard + 2;
                changeKeyboard(numKeyboard);
                localStorage.setItem('numSocket', 'en')                             
            } else if ((numKeyboard == 3) || (numKeyboard == 4)){
                numKeyboard = numKeyboard - 2;
                changeKeyboard(numKeyboard);  
                localStorage.setItem('numSocket', 'ru')                               
            }
        } else if ((numKeyboard == 1) || (numKeyboard == 3)) {
            numKeyboard = numKeyboard + 1;
            changeKeyboard(numKeyboard);
        } else {
            numKeyboard = numKeyboard - 1;
            changeKeyboard(numKeyboard);
        }

    }  
    if ((event.target.id == 'Backspace') || (event.code == 'Backspace')) {
        document.querySelector('#Backspace').classList.add('clickBtnCape');
        document.querySelector('div.input_sheet').lastChild.remove();
    }
    if ((event.target.id == 'Enter') || (event.code == 'Enter')) {
        document.querySelector('#Enter').classList.add('clickBtnCape');
        document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '<br>');
    }
    if ((event.target.id == 'Tab') || (event.code == 'Tab')) {
        document.querySelector('#Tab').classList.add('clickBtnCape');
        document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');        
    }
    if ((event.target.id == 'Space') || (event.code == 'Space')) {
        document.querySelector('#Space').classList.add('clickBtnCape');
        document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '&nbsp');        
    }


    if (event.target.classList[1] == 'itemChange') {       
                      
        const tr = event.target.innerText;
        document.querySelector('div.input_sheet').insertAdjacentText('beforeend', tr);
        

        document.querySelector('#AltLeft').classList.remove('clickBtnCape');
        document.querySelector('#ControlLeft').classList.remove('clickBtnCape');
        if (document.querySelector('#ShiftLeft').classList[1] == 'clickBtnCape'){
            if ((numKeyboard == 2) || (numKeyboard == 4)) {
                numKeyboard = numKeyboard - 1;
                changeKeyboard(numKeyboard);
                
                document.querySelector('#ShiftLeft').classList.remove('clickBtnCape');
            }
        }
    }   

    for (let i = 0; i < ArrayKeyChange.length; i++) {
        let idKey = ArrayKeyChange[i][0];
        if (event.code === idKey) {
            document.querySelector('div.input_sheet').insertAdjacentText('beforeend', ArrayKeyChange[i][numKeyboard]);
            document.querySelector('#' + idKey).classList.add('clickBtn');        
        }   
    }
  
   document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '|');

}
const clickUpMouse = () => {
    document.querySelector('#Backspace').classList.remove('clickBtnCape');
    document.querySelector('#Enter').classList.remove('clickBtnCape');
    document.querySelector('#Tab').classList.remove('clickBtnCape');
    document.querySelector('#Space').classList.remove('clickBtnCape');

    document.querySelectorAll('.itemChange').forEach(item => item.classList.remove('clickBtn'));
    if  (((document.querySelector('#AltLeft').classList[1] == 'clickBtnCape') || (document.querySelector('#ControlLeft').classList[1] == 'clickBtnCape')) && (document.querySelector('#ShiftLeft').classList[1] == 'clickBtnCape')) {
        document.querySelector('#AltLeft').classList.remove('clickBtnCape');
        document.querySelector('#ControlLeft').classList.remove('clickBtnCape');
        document.querySelector('#ShiftLeft').classList.remove('clickBtnCape');
    }
}  
document.querySelector('.keyboarder_wrapper').addEventListener('mousedown', clickDownMouse);
document.addEventListener('mouseup', clickUpMouse);

document.addEventListener('keydown',clickDownMouse);
document.addEventListener('keyup',clickUpMouse);





