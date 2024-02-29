// let reverseNum = (n) => {
//   let r = 0;

//   while (n != 0) {
//     r = r * 10 + (n % 10);
//     n = (n - (n % 10)) / 10;
//   }

//   return r;
// };

// let reverseNum = (n) => {
//   n = String(n);
//   let r = '';

//   for (let i = n.length - 1; i >= 0; i--) {
//     r += n[i];
//   }

//   return Number(r);
// };

// alert(reverseNum(123045));

// let reverseStr = (str) => {
//   let r = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     r += str[i];
//   }

//   return r;
// };

// let isPalindrome = (str) => {
//   let reversed = reverseStr(str);
//   if (str === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// };

// 4 - 0 1 2 3 4
// 5 - 0 1 2 3 4 5

// m a d a m
// 0 1 2 3 4
// 4 3 2 1 0

// a w d q w a

// let isPalindrome = (str) => {
//   let mid = Math.floor((str.length - 1) / 2);

//   for (let i = 0, j = str.length - 1; i <= mid && j >= mid; i++, j--) {
//     if (str[i] != str[j]) {
//       return false;
//     }
//   }

//   return true;
// };

// alert(isPalindrome('awddwa'));

let str = '12345';

let task3 = (str) => {
  let answer = [];

  for (let i = 0; i < str.length; i++) {
    let temp = '';
    for (let j = i; j < str.length; j++) {
      temp += str[j];
      answer.push(temp);
    }
  }

  return answer;
};

console.log(task3('abcdefg').join(','));

// "a c e c"
// 97 99 101
// 0  2  4

let arr = [
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

/*
dog

0-0 d
0-1 do
0-2 dog

1-1 o
1-2 og

2-2 g
*/

/*
i j
0 0
0 1
0 2

1 1
1 2

2 2
*/
