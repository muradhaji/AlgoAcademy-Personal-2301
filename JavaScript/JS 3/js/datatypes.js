/*
let user = "John";
console.log(user);

user = "Mike";
console.log(user);

user = 25;
console.log(user);

user = 19.7;
console.log(user);
*/

//Strongly typed languages (c, c++)
//Dynamically typed languages (js)

//Number Start

let x = 5;
let y = 8;
let z;

z = x * y;
z = y / x;
z = y + x;
z = x - y;

x = 1.6;
x = Infinity;
x = -Infinity;
x = 1 / 0; //Infinity
x = -1 / 0; //-Infinity
x = NaN;
x = "John" / 2;

x = 2 * 3;
x = 2 ** 3;
x = 9 ** 0;
x = NaN ** 0;
x = Infinity ** 0;
x = (-Infinity) ** 0;
x = "This is string" ** 0;
x = true ** 0;
x = false ** 0;
x = NaN + 5;

//Number End

//BigInt Start

let num = 9007199254740991;
let negativeNum = -9007199254740991;
let longNumber =  1234567890123456789012345678901234567890n;

console.log(num + 1);
console.log(num + 2);
console.log(num + 3);
console.log(num + 4);
console.log(longNumber);
//console.log(longNumber + 1);
console.log(longNumber + 1n);
console.log(longNumber - 901234567890n);

//BigInt End

