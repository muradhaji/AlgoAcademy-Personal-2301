// let n = Number(prompt("N:"));

// let sum = 0;

// while(n > 0) {
// 	sum += n--;
// }

// console.log(sum);
// console.log(n);

// let n = Number(prompt("N:"));

// while(n != 0) {
// 	console.log(n);
// 	n -= 1;
// }

// while(n != 0) console.log(n--);

// let n;

// while(n == null || isNaN(Number(n)) || n == "" ) {
// 	n = prompt("N:");
// };

// let i = 0;

// while(i > 0) {
// 	console.log(i);
// 	i--;
// };

// do {
// 	console.log(i);
// 	i--;
// } while(i > 0);

// let i = 0;
// do {
//  console.log( i );
//  i++;
// } while (i < 3);

// let i = 0;
// while (i < 3) {
//  console.log( i );
//  i++;
// } ;

// for (let i = 0; i < 3; i++) {
//  console.log(i);
// }

// for (let i = 0, j = 2; i < 3 && j > 0; i++, j--) {
//  console.log(i * j);
// }

// let i;
// for (i = 0; i < 3; i++) {
//  console.log(i);
// }
// console.log(`Last i value: ${i}`)

// let i = 0;
// for (; i < 3;) {
//  console.log(i++);
// }

// let i;
// for(i = 0; i < 10 ; i++) {
// 	console.log(i);
// 	if(i == 7) {
// 		break;
// 	}
// }
// console.log(`Last i: ${i}`)


// let n;
// while(true) {
// 	n = prompt("N:");
// 	if(n != null && !isNaN(Number(n)) && n != "") {
// 		break;
// 	}
// };

// let i;
// for(i = 0; i < 10 ; i++) {
// 	if(i % 2 == 1) {
// 		continue;
// 	}
// 	console.log(i);
// }
// console.log(`Last i: ${i}`)

// firstFor:
// for(let i = 0 ; i < 3 ; i++) {
// 	secondFor:
// 	for(let j = 0 ; j < 3 ; j++) {
// 		if(j == 2) {
// 			break firstFor;
// 		}
// 		console.log(`I: ${i}, J: ${j}`);
// 	}
// }

// console.log("End")


// for(let i = 0 ; i < 10 ; i++) {
// 	console.log(i)
// 	if(i == 5) {
// 		continue;
// 	}
// }

// let x = 0;

// while(x < 10) {
// 	if(x == 5) {
// 		x++;
// 		continue;
// 	}
// 	console.log(x);
// 	x++;
// }

// let a = [5, 6, -6, 0, 3, 9];

// let arr = [
// 		[4, -5, 7],
// 		[8, 0],
// 		[4, 7, 12, 1],
// 		[-7, 4, 9, -3, 2, 1],
// 	];

// let sum = 0;

// // for(let i = 1; i < a.length ; i += 2) {
// // 	sum += a[i];
// // }

// firstLoop:
// for(let i = 0 ; i < arr.length ; i++) {
// 	if(i % 2 == 0) {
// 		continue firstLoop;
// 	}
// 	secondLoop:
// 	for(let j = 0 ; j < arr[i].length ; j++) {
// 		// if(j < 1) {
// 		// 	sum += arr[i][j];
// 		// }
// 		if(j == 1) {
// 			// break secondLoop;
// 			// continue firstLoop;
// 		}
// 		if(j % 2 == 0) {
// 			continue secondLoop;
// 		}
// 		sum += arr[i][j];
// 	}
// }

// console.log(sum);

/*
i j
---
0 0 
0 1
0 2
1 0
1 1
2 0
2 1
2 2
2 3
*/

// let isMarried = prompt("Are you married? (yes / no)");

// if(isMarried == "yes") {
// 	alert("Congratulations");
// } else if(isMarried == "no") {
// 	alert("Maybe one day");
// } else {
// 	alert("Unknow answer");
// }

// switch(isMarried) {
// 	case "yes":
// 		alert("Congratulations");
// 		break;
// 	case "no":
// 		alert("Maybe one day");
// 		break;
// 	default:
// 		alert("Unknow answer");
// 		break;
// }

// let answer = prompt("2 + 2 = ?");
// let message;

// switch(answer) {
// 	case "3":
// 	case "5":
// 		message = "Incorrect";
// 		break;
// 	case "4":
// 		message = "Correct!";
// 		break;
// 	case null:
// 		message = "Nullllll";
// 		break;
// 	default:
// 		message = "Unknow answer";
// 		break;
// }

// console.log(message);

// let n = null;

// while(n == null || n.replaceAll(" ", "") == "" || isNaN(n)) {
// 	n = prompt("Enter n:");
// }

// while(true) {
// 	n = prompt("Enter n:");
// 	if(n != null && n.replaceAll(" ", "") != "" && !isNaN(n)) {
// 		break;
// 	}
// }


9
1 3 5 7 9


18
1 3 5 7 9 11 13 15 17


begin = 5
step = 3
i = 6

1 2 3  4
5 8 11 14 17 20