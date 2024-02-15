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

firstFor:
for(let i = 0 ; i < 3 ; i++) {
	secondFor:
	for(let j = 0 ; j < 3 ; j++) {
		if(j == 2) {
			break firstFor;
		}
		console.log(`I: ${i}, J: ${j}`);
	}
}

console.log("End")
