let begin = Number(prompt("Begin:"));
let step = Number(prompt("Step:"));
let n = Number(prompt("N:"));

// for(let i = 1 ; i < n; i++) {
// 	begin += step;
// }

// let i = 1;
// while(true) {
// 	if(i == n) {
// 		break;
// 	}
// 	begin += step;
// 	i++;
// }

begin += (n - 1) * step;

alert(begin);

//begin 5
//step 4
//n 5
