// let num = Number(prompt("Enter number:"));

// if(num < 0) alert("Negative");

// let condition = num < 0;
// if(condition) alert("Negative");

// if(num < 0) alert("Negative"), console.log("Negative");

// if(num < 0) {
// 	alert("Negative");
// 	console.log("Negative");
// };

// if(0) {
// 	alert("Negative");
// };

// if(" ") {
// 	alert("Negative");
// };

// if(num < 0) {
// 	alert("Negative");
// } else {
// 	alert("Positive");
// };

// if(num < 0) {
// 	alert("Negative");
// } else {
// 	if(num > 0) {
// 		alert("Positive");
// 	} else {
// 		alert("Zero");
// 	}
// };

// if(num < 0) {
// 	alert("Negative");
// } else if (num > 0) {
// 	alert("Positive");
// } else {
// 	alert("Zero");
// }

// Condition with question mark (?)

// let age = Number(prompt("Enter your age:"));

// let permission;

// if(age >= 18) {
// 	permisson = true;
// } else {
// 	permisson = false;
// }

// if(permisson) {
// 	alert("You are allowed.");
// } else {
// 	alert("You are not allowed!");
// }

// let message = (age >= 18) ? "You are allowed." : "You are not allowed!";

// alert(message);

// alert((age >= 18) ? "You are allowed." : "You are not allowed!");

// (age >= 18) ? alert("Allowed.") : alert("Not allowed!");

// (age >= 18) ? "Allowed." : "Not allowed!";

// (age >= 18) ? (alert("Allowed."), console.log("Allowed")) : alert("Not allowed!");

// let num = Number(prompt('Enter number:'));

// alert(
//   num < 0
//     ? num < -200
//       ? 'Less than -200'
//       : 'Between -200 and -1'
//     : num > 0
//     ? 'Positive'
//     : num == 0
//     ? 'Zero'
//     : num == NaN
//     ? 'Not a number'
//     : 'Unknown input'
// );

// (conditon) ? "If condition true" : "If condition false" ;

let a = 4;
let b = 7;
let c = 5;

// if(a < c & c < b) {
// 	console.log("Ok")
// }

console.log(a < c || c > b);
console.log(1 || 0);
console.log(null || "x");
console.log(" " || null || 1);
console.log(undefined || null || 0 || NaN);


let str1 = "";
let str2 = "Hello";
let str3 = "";
let str4;

console.log(str1 || str2 || str3 || str4)