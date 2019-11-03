let arrayKeyboarderRu = ['ё','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', '&nbsp', 'Alt', '◄', '▼', '►', 'Ctrl'];

let arrayKeyboarderRuBig = ['Ё','!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+','Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '//', 'DEL', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', '&nbsp', 'Alt', '◄', '▼', '►', 'Ctrl'];

let arrayKeyboarderEn = ['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','▲', 'Shift', 'Ctrl', 'Win', 'Alt', '&nbsp', 'Alt', '◄', '▼', '►', 'Ctrl'];

let arrayKeyboarderEnBig = ['~','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+','Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'DEL', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'ENTER', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?','▲', 'Shift', 'Ctrl', 'Win', 'Alt', '&nbsp', 'Alt', '◄', '▼', '►', 'Ctrl'];


let arrayKeyCode = ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7', 'Digit8', 'Digit9', 'Digit0','Minus','Equal','Backspace','Tab' ,'KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Delete', 'CapsLock','KeyA','KeyS','KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote','Enter','ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight','ControlLeft','MetaLeft','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight']


let numberArrayKeyboard = [arrayKeyboarderRu, arrayKeyboarderRuBig, arrayKeyboarderEn,arrayKeyboarderEnBig];
let count = 0;



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



//заполенение строк

function fillDiv(count2) {
    let r = numberArrayKeyboard[count2];
    for (let i = 0; i < 64; i++) {
        let  tempDiv = document.createElement('div');
        tempDiv.className = 'item';
        let numberRow = 'div.row';
        if (0 < i && i <= 13) {
            numberRow = numberRow + 1;
        } else if (13 < i && i <= 28){
            numberRow = numberRow + 2;
        } else if (28 < i && i <= 41) {
            numberRow = numberRow + 3;
        } else if (31 < i && i <= 54) {
            numberRow = numberRow + 4;
        } else if (54 < i && i <= 63) {
            numberRow = numberRow + 5;
        }
        tempDiv.id = arrayKeyCode[i];
        tempDiv.innerHTML = r[i];         
        document.querySelector(numberRow).insertAdjacentElement('beforeend', tempDiv);  
    }
}

fillDiv(count);

//нажатие клавишу мыши

let countAltL = 0;
let countShiftL = 0;
let arrClickKey = ['AltLeft','AltRight', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight'];

function CheckClick(idCheckName, countCheck, idCheck) {
    if (event.target.id === idCheckName) {
        if (countCheck === 0) { 
            countCheck = 1;   
            document.querySelector(idCheck).classList.add('clickBtnCape'); 
        } else if (countCheck === 1){
            countCheck = 0;   
            document.querySelector(idCheck).classList.remove ('clickBtnCape');
            
        }
        
    }
    return countCheck; 
}


const clickDown = (event) => {

    countAltL = CheckClick('AltLeft', countAltL , '#AltLeft');
    countShiftL = CheckClick('ShiftLeft', countShiftL , '#ShiftLeft'); 

    if ((document.querySelector('#AltLeft').className === 'clickBtnCape') && (document.querySelector('#ShiftLeft').className === 'clickBtnCape')) {

    fillDiv(count);
    } 

    for (let i = 0; i < 6; i++) {      //Если вспомогательные кнопки,то дальше не идет
        if ((event.target.id === arrClickKey[i]) ) {
            return;
        }
    }

    if (event.target.id === 'CapsLock') {            
        document.querySelectorAll('.item').forEach(e => e.parentNode.removeChild(e));
        if (count === 0) {
            count = 1;
            fillDiv(count);                    
            document.querySelector('#CapsLock').classList.add('clickBtnCape');       
        } else if (count === 1){
            count = 0;
            fillDiv(count);
            if (event.target.className === 'item') {  
                event.target.classList.add('clickBtn');                             
            } 
        }
        return;
    }         
    if (event.target.className === 'item') {  
        event.target.classList.add('clickBtn'); 
        if (event.target.id === 'Backspace') {
            document.querySelector('div.input_sheet').lastChild.remove();
        } else if (event.target.id === 'Enter') {
            document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '<br>');
        } else if (event.target.id === 'Tab') {
            document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        } else {            
            const tr = event.target.innerText;
            document.querySelector('div.input_sheet').insertAdjacentText('beforeend', tr);
        } console.log(count);
    }
}   
 
 const clickUp = (event) => {
    document.querySelectorAll('.item').forEach(item => item.classList.remove('clickBtn'));
    
 } 
document.querySelector('.keyboarder_wrapper').addEventListener('mousedown', clickDown);
document.addEventListener('mouseup', clickUp);





