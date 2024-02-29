// 1 function declaration
// function sayHi1() {
//   alert("Hello friend!");
// }

// Function expression
// let sayHi2 = function () {
//   alert("Hello friend!");
// }

// Arrow functions
// let sayHi3 = () => {
//   alert("Hello friend!");
// }

// console.log(sayHi1());
// console.log(sayHi1);
// console.log(sayHi2);
// console.log(sayHi3);

// let sum = function (p1, p2, p3) {
//   return p1 + p2 + p3
// }
// console.log(sum(1, 3, 5));

// let whenOk = () => {
//   alert("You selected ok button");
// }

// let onOk = whenOk;

// whenOk()
// onOk()

// let whenCancel = () => {
//   alert("You selected cancel button");
// }

// // getAge(whenOk, whenCancel);

// let getAge = (oncancel, onnan, onsucces = () => {}) => {
//   let answer = prompt('Enter age:');
//   if (answer == null) {
//     oncancel();
//   } else if (isNaN(answer)) {
//     onnan();
//   } else {
//     onsucces(Number(answer));
//   }
// };

// let cancelFunc = () => {
//   alert('Why you cancelled?');
// };

// getAge(
//   cancelFunc,
//   () => {
//     alert('Please enter correct number');
//   },
//   (value) => {
//     alert(`Your age: ${value}`);
//   }
// );

// getAge(
//   () => {
//     alert("A")
//   },
//   () => {
//     alert("B")
//   },
//   (value) => {
//     alert(`C: ${value * 5}`)
//   }
// )

// sayHi1();
// function sayHi1() {
//   alert("Hello 1");
// }

// sayHi2();
// let sayHi2 = function () {
//   alert("Hello 2");
// }

// sayHi3();
// let sayHi3 = () => {
//   alert("Hello 3");
// }
// 'use strict';

// let age = 17;

// if(age < 18) {
//   function showMessage() {
//     alert("not allow 1");
//   }
// } else {
//   function showMessage() {
//     alert("allow 1");
//   }
// }

// let showMessage2;

// if(age < 18) {
//   showMessage2 = function () {
//     alert("not allow 2");
//   }
// } else {
//   showMessage2 = function () {
//     alert("allow 2");
//   }
// }

// showMessage();
// showMessage2();

// function sum1(a, b) {
//   return a + b;
// }

// let sum2 = (a, b) => a + b;

// let myPow = (x, y) => Math.pow(x, y);

// let test = (a, b) => {
//   let x = a + b;
//   let y = a - b;
//   return x * y;
// };

// console.log(sum1(5, 8));
// console.log(sum2(5, 8));
// console.log(myPow(2, 3));
// console.log(test(3, 4))

// ----------------------
// Practise
// ----------------------

// let rects = [
//   [1, 1, 3, 3],
//   [-2, -2, 4, 4],
//   [4, 4, -2, -2],
//   [1, 3, 7, 8],
//   [4, 4, 4, 4],
// ];

// function rectArea(rect) {
//   let x = rect[2] - rect[0];
//   let y = rect[3] - rect[1];
//   let s = x * y;
//   s = (s < 0) ? s * -1 : s;
//   return s;
// }

// function calculateRectAreas(rectsArr) {
//   for(let i = 0 ; i < rectsArr.length ; i++) {
//     console.log(rectArea(rects[i]));
//   }
// }

// calculateRectAreas(rects);

// ----------------------
// Task
// ----------------------

// h (0 - 23)
// d (1 - 7)

// 1 - 5 (9 - 18)
// 6 (9 - 15)
// 7 (-)

// open
// closed
