// let result;

// function sayHi(firstname) {
// 	let result = `Hello ${firstname}`;
// 	alert(result);
// }

// console.log(result);

// sayHi();
// console.log(result);

// sayHi("John");
// console.log(result);

// sayHi("Mike");
// console.log(result);

// function showMessage(from, message = "No message") {
// 	alert(`${from} says: ${message}`);
// }

// showMessage("John");
// showMessage("Mike", "Hello John.");

// function sum(a = 3, b = 2) {
// 	alert(a + b)
// }

// let first = 5;
// let second = 8;

// // sum(5, 8);
// // sum(first, second)
// // sum(1, 6);
// // sum(9);
// // sum();
// // sum(undefined, 8);
// sum(null, 8);
// sum(7n, 8);

// function showMessage(from, message) {
	// Method 1
	// if(from === undefined) {
	// 	from = "Anonim";
	// }
	// if(message === undefined) {
	// 	message = "No message";
	// }

	// Method 2
	// from = (from === undefined) ? "Anonim" : from ;

	// Method 3
	// from = from || "Anonim";

	// Method 4
	// from = from ?? "Anonim";

	// alert(`${from} says: ${message}`);
// }

// showMessage();
// showMessage("John");
// showMessage(undefined, "Hi Mike.");

// function sum(a, b) {
// 	let result = a + b;
// 	return result;
// }

// console.log(sum(7, 8));

// function concat(x, y) {
// 	let result = `${x} - ${y}`;
// 	let result = x + " - " + y;
// 	return result;
// 	return;
// }

// "Hello - friend"
// alert(concat("Hello", "friend"));

function showPrimes(n) {
	outerLopp:
	for(let prime = 2; prime <= n; prime++) {
		if(isPrime(prime)) {
			console.log(prime);
		}
	}
}

function isPrime(n) {
	for(let x = 2; x < n; x++){
		if(n % x == 0) {
			return false;
		}
	}
	return true;
}

let arr = [2, 5, 6, 8, 11, 14, 26, 91, 92, 97];

for(let i = 0; i < arr.length; i++){
	if(isPrime(arr[i])) {
		console.log(arr[i]);
	}
}

// showPrimes(30);
