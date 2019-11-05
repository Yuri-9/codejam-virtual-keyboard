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
 
function changeKeyboard (numberKey) {
    for (let i = 0; i < arrayKeyCodeChange.length; i++){
        let a = ArrayKeyboard[arrayKeyCodeChange[i]][0];
        let b = ArrayKeyboard[arrayKeyCodeChange[i]][numberKey];    
        document.querySelector('#' + a).innerHTML = b;
    }
}

changeKeyboard(4);

//нажатие клавишу мыши
let numKeyboard = 1;
let numberAltL = 0;
let numberShiftL = 0;
let arrClickKey = ['AltLeft','AltRight', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight'];

function CheckClick(idCheckName, numberClick, idCheck) {
    if (event.target.id == idCheckName) {
        if (numberClick == 0) { 
            numberClick = 1;   
            document.querySelector(idCheck).classList.add('clickBtnCape'); 
        } else if (numberClick == 1){
            numberClick = 0;   
            document.querySelector(idCheck).classList.remove('clickBtnCape');            
        }
        
    }
    console.log('numberClick ', numberClick);
    return numberClick;
    
}


const clickDown = (event) => {

    numberAltL = CheckClick('AltLeft', numberAltL , '#AltLeft');
    numberShiftL = CheckClick('ShiftLeft', numberShiftL , '#ShiftLeft'); 

    if ((document.querySelector('#AltLeft').classList[1] === 'clickBtnCape') && (document.querySelector('#ShiftLeft').classList[1] === 'clickBtnCape')) {
            if ((numKeyboard == 1) || (numKeyboard == 2)) {
                numKeyboard = numKeyboard + 2;
                changeKeyboard(numKeyboard);                    
            document.querySelector('#AltLeft').classList.remove('clickBtnCape');
            document.querySelector('#ShiftLeft').classList.remove('clickBtnCape');

        } else if ((numKeyboard == 3) || (numKeyboard == 4)){
            numKeyboard = numKeyboard - 2;
            changeKeyboard(numKeyboard);                     
            document.querySelector('#AltLeft').classList.remove('clickBtnCape');
            document.querySelector('#ShiftLeft').classList.remove('clickBtnCape');
        } 
    }

    for (let i = 0; i < 6; i++) {      //Если вспомогательные кнопки,то дальше не идет
        if ((event.target.id === arrClickKey[i]) ) {
            return;
        }
    }

    if (event.target.id == 'CapsLock') {
        if ((numKeyboard == 1) || (numKeyboard == 3)) {
            numKeyboard = numKeyboard + 1;
            changeKeyboard(numKeyboard);                    
            document.querySelector('#CapsLock').classList.add('clickBtnCape');       
        } else {
            numKeyboard = numKeyboard - 1;
            changeKeyboard(numKeyboard);            
            document.querySelector('#CapsLock').classList.remove('clickBtnCape');        
        }
        return;
    }         
    if (event.target.className == 'item') {  
        event.target.classList.add('clickBtn'); 
        if (event.target.id == 'Backspace') {
            document.querySelector('div.input_sheet').lastChild.remove();
        } else if (event.target.id == 'Enter') {
            document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '<br>');
        } else if (event.target.id == 'Tab') {
            document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        } else {            
            const tr = event.target.innerText;
            document.querySelector('div.input_sheet').insertAdjacentText('beforeend', tr);
        } 
    }
}   
const clickUp = () => {
    document.querySelectorAll('.item').forEach(item => item.classList.remove('clickBtn'));
    
 } 
document.querySelector('.keyboarder_wrapper').addEventListener('mousedown', clickDown);
document.addEventListener('mouseup', clickUp);





