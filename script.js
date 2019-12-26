const arrayKeyboard = [
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

const arrayKeyCodeChange = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 43, 44, 45, 46, 47, 48, 49,
  50, 51, 52];
const arrayKeyChange = [];
let numKeyboard = (localStorage.getItem('numSocket') === '3') ? 3 : 1;


function createSheet(nameClass) {
  const elemSheet = document.createElement('div');
  elemSheet.className = nameClass;
  document.querySelector('body').insertAdjacentElement('beforeend', elemSheet);
}
createSheet('input_sheet');
createSheet('keyboarder_wrapper');
document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '|');


(function addRows() {
  for (let i = 1; i <= 5; i += 1) {
    const rowDiv = document.createElement('div');
    rowDiv.className = `row${i}`;
    rowDiv.classList.add('row');
    document.querySelector('body > div.keyboarder_wrapper').insertAdjacentElement('beforeend', rowDiv);
  }
}());


function renderKeyboard(elem, ind) {
  const tempDiv = document.createElement('div');
  tempDiv.className = 'item';
  [tempDiv.id] = elem;
  [, tempDiv.innerHTML] = elem;
  let rowNumber;
  if (ind <= 13) rowNumber = '.row1';
  if (ind > 13 && ind <= 28) rowNumber = '.row2';
  if (ind > 28 && ind <= 41) rowNumber = '.row3';
  if (ind > 41 && ind <= 54) rowNumber = '.row4';
  if (ind > 54 && ind <= 63) rowNumber = '.row5';
  document.querySelector(rowNumber).insertAdjacentElement('beforeend', tempDiv);
}

arrayKeyboard.forEach((elem, index) => { renderKeyboard(elem, index); });


(function selectKeyChange() {
  arrayKeyCodeChange.forEach((item) => {
    arrayKeyChange.push(arrayKeyboard[item]);
    const [a] = arrayKeyboard[item];
    document.getElementById(a).classList.add('itemChange');
  });
}());


function changeKeyboard(numberKey) {
  arrayKeyChange.forEach((item) => {
    const [a] = item;
    const b = item[numberKey];
    document.getElementById(a).innerHTML = b;
  });
}

changeKeyboard(numKeyboard);


function addClickBnt(arr) {
  arr.forEach((item) => document.getElementById(item).classList.add('clickBtnCape'));
}

function removeClickBnt(arr) {
  arr.forEach((item) => document.getElementById(item).classList.remove('clickBtnCape'));
}

function checkContainsBtnCape(arr) {
  return arr.some((item) => document.getElementById(item).classList.contains('clickBtnCape'));
}


function clickCapsLock() {
  if (!checkContainsBtnCape(['CapsLock'])) {
    addClickBnt(['CapsLock']);
  } else {
    removeClickBnt(['CapsLock']);
  }
  numKeyboard = ((numKeyboard === 1) || (numKeyboard === 3)) ? numKeyboard += 1 : numKeyboard -= 1;
  changeKeyboard(numKeyboard);
}

function clickAlt(side) {
  if (!checkContainsBtnCape([side])) {
    addClickBnt([side]);
  } else {
    removeClickBnt([side]);
  }
}

function clickControl(side) {
  if (!checkContainsBtnCape([side])) {
    addClickBnt([side]);
  } else {
    removeClickBnt([side]);
  }
}

function clickShift(side) {
  if (!checkContainsBtnCape([side])) {
    addClickBnt([side]);
  } else {
    removeClickBnt([side]);
  }

  if (checkContainsBtnCape(['AltLeft', 'AltRight', 'ControlLeft', 'ControlRight'])) {
    numKeyboard = ((numKeyboard === 1) || (numKeyboard === 2))
      ? numKeyboard += 2 : numKeyboard -= 2;
    changeKeyboard(numKeyboard);
    localStorage.setItem('numSocket', numKeyboard);
  } else {
    numKeyboard = ((numKeyboard === 1) || (numKeyboard === 3))
      ? numKeyboard += 1 : numKeyboard -= 1;
    changeKeyboard(numKeyboard);
  }
}

function clickBackspace() {
  addClickBnt(['Backspace']);
  if (document.querySelector('div.input_sheet').childNodes.length >= 1) {
    document.querySelector('div.input_sheet').lastChild.remove();
  }
}

function clickEnter() {
  addClickBnt(['Enter']);
  document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '<br>');
}

function clickTab() {
  addClickBnt(['Tab']);
  document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
}

function clickSpace() {
  addClickBnt(['Space']);
  document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '&nbsp');
}

function clickLetter(event) {
  let tr;
  if (!event.code) {
    tr = event.target.innerText;
    event.target.classList.add('clickBtn');
  } else {
    tr = arrayKeyChange.find((item) => item[0] === event.code);
    tr = tr[numKeyboard];
    document.getElementById(event.code).classList.add('clickBtn');
  }
  document.querySelector('div.input_sheet').insertAdjacentText('beforeend', tr);

  removeClickBnt(['AltLeft', 'AltRight', 'ControlLeft', 'ControlLeft']);

  if (checkContainsBtnCape(['ShiftLeft', 'ShiftRight'])) {
    numKeyboard = ((numKeyboard === 2) || (numKeyboard === 4)) ? numKeyboard -= 1 : numKeyboard;
    changeKeyboard(numKeyboard);
  }
  removeClickBnt(['ShiftLeft', 'ShiftRight']);
}


const clickDownKey = (event) => {
  document.querySelector('div.input_sheet').lastChild.remove();
  const idCode = event.code ? event.code : event.target.id;
  if (idCode === 'CapsLock') clickCapsLock();
  if (idCode === 'AltLeft') clickAlt('AltLeft');
  if (idCode === 'AltRight') clickAlt('AltRight');
  if (idCode === 'ControlLeft') clickControl('ControlLeft');
  if (idCode === 'ControlRight') clickControl('ControlRight');
  if (idCode === 'ShiftLeft') clickShift('ShiftLeft');
  if (idCode === 'ShiftRight') clickShift('ShiftRight');
  if (idCode === 'Backspace') clickBackspace();
  if (idCode === 'Enter') clickEnter();
  if (idCode === 'Tab') clickTab();
  if (idCode === 'Space') clickSpace();
  if (event.target.classList.contains('itemChange') || arrayKeyChange.some((item) => item[0] === event.code)) clickLetter(event);
  document.querySelector('div.input_sheet').insertAdjacentHTML('beforeend', '|');
};

const clickUpKey = () => {
  removeClickBnt(['Backspace', 'Enter', 'Tab', 'Space']);
  document.querySelectorAll('.itemChange').forEach((item) => item.classList.remove('clickBtn'));

  if ((checkContainsBtnCape(['AltLeft', 'AltRight', 'ControlLeft', 'ControlRight'])) && checkContainsBtnCape(['ShiftLeft', 'ShiftRight'])) {
    removeClickBnt(['AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight']);
  }
};

document.querySelector('.keyboarder_wrapper').addEventListener('mousedown', clickDownKey);
document.addEventListener('mouseup', clickUpKey);

document.addEventListener('keydown', clickDownKey);
document.addEventListener('keyup', clickUpKey);
