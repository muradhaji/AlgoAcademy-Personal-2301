// document.childNodes;
// document.children;

// document.body.previousSibling;
// document.body.previousElementSibling;

// document.body.parentNode;
// document.body.parentElement;

// document.documentElement.parentNode;
// document.documentElement.parentElement;

// console.log(document.getElementsByClassName('myp'));
// console.log(document.getElementsByClassName('myp1'));
// console.log(document.getElementsByClassName('myp1 myp'));
// console.log(document.getElementsByClassName('myp myp3'));

// console.log(document.getElementsByTagName('body'));
// console.log(document.getElementsByTagName('p'));

// console.log(document.getElementsByName('p'));
// console.log(document.getElementsByName('first'));
// console.log(document.getElementsByName('username'));
// console.log(document.getElementsByName('userage'));

// console.log(document.querySelectorAll("body > form > input[name='userage']"));

// function add() {
//   let aInp = document.getElementsByName('a')[0];
//   let bInp = document.getElementsByName('b')[0];
//   let cInp = document.getElementsByName('c')[0];

//   cInp.value = +aInp.value + +bInp.value;
// }

// function multiple() {
//   let aInp = document.getElementsByName('a')[0];
//   let bInp = document.getElementsByName('b')[0];
//   let cInp = document.getElementsByName('c')[0];

//   cInp.value = +aInp.value * +bInp.value;
// }

// let numbers = [];

// function displayScreen() {
//   document.querySelector('div.screen').innerText = numbers.join(' ');
// }

// let btn1 = () => {
//   numbers.push(1);
//   displayScreen();
// };
// let btn2 = () => {
//   numbers.push(2);
//   displayScreen();
// };
// let btn3 = () => {
//   numbers.push(3);
//   displayScreen();
// };
// let btnPlus = () => {
//   numbers.push('+');
//   displayScreen();
// };
// let btnMinus = () => {
//   numbers.push('-');
//   displayScreen();
// };

// function clickButton(x) {
//   numbers.push(x.innerText);
//   console.log(x.getAttribute('data-calc'));
// }

// console.log(document.body.children[0].matches('html > body > div.screen'));

// console.log(document.body.children[0].children[0].closest('.screen'));

// console.log(document.body.style.backgroundColor);

// document.body.style.backgroundColor = 'darkcyan';

// function darkMode() {
//   if (document.body.style.backgroundColor == 'black') {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//     document.getElementsByTagName('a')[0].style.color = 'black';
//   } else {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//     document.getElementsByTagName('a')[0].style.color = 'white';
//   }
// }
function darkMode() {
  // console.log(document.body.getAttribute('class'));
  let isLightMode = document.body.classList.value.includes('lightmode');
  if (isLightMode) {
    document.body.children[0].innerText = 'Light mode';
    document.body.classList.remove('lightmode');
    document.body.classList.add('darkmode');
    // document.body.classList.replace('lightmode', 'darkmode');
    // document.body.setAttribute('class', 'darkmode');
  } else {
    document.body.children[0].innerText = 'Dark mode';
    document.body.classList.remove('darkmode');
    document.body.classList.add('lightmode');
    // document.body.setAttribute('class', 'lightmode');
  }
}

// let newEl = document.createElement('p');
// newEl.innerText = 'Paragraph 1';
// document.body.appendChild(newEl);

// let aEl = document.body.children[4];
// document.body.removeChild(aEl);

// aEl.appendChild(newEl)
// newEl.appendChild(aEl);
// document.body.appendChild(newEl);

// document.body.insertBefore(newEl, aEl);
// document.body.insertAdjacentElement('afterbegin', newEl);

// document.body.insertBefore(newEl, document.body.children[3]);
