// let arr = ['4', '+', '10', '*', '5', '/', '25', '-', '18'];
// let arr = [undefined, '+', '10', '*', '5', '/', '25', '-', undefined];
// let screnArr = ['0', '+', '4.6', '*', '5', '/', '10', '-', '0.3'];
// let screnArr = [
//   '(',
//   '1',
//   '+',
//   '2',
//   '*',
//   '5',
//   ')',
//   '/',
//   '(',
//   '2',
//   '-',
//   '2',
//   ')',
// ];
let arr = [
  '(',
  '(',
  '(',
  '2',
  '+',
  '1',
  ')',
  '*',
  '(',
  '3',
  '-',
  '2',
  ')',
  ')',
  '+',
  '5',
  ')',
];

let opr = ['*', '/', '+', '-'];

function partialCalculate(arr = []) {
  outer: for (let o = 0; o < opr.length; o++) {
    inner: for (let i = 1; i < arr.length; i += 2) {
      if (arr[i] == opr[o]) {
        let x = +arr[i - 1];
        let y = +arr[i + 1];
        if (isNaN(x) || isNaN(y)) {
          break inner;
        }
        let mid;
        if (opr[o] == '*') {
          mid = x * y;
        } else if (opr[o] == '/') {
          mid = x / y;
        } else if (opr[o] == '+') {
          mid = x + y;
        } else if (opr[o] == '-') {
          mid = Math.round(x - y);
        }
        let left = arr.slice(0, i - 1);
        let right = arr.slice(i + 2, arr.length);
        arr = [].concat(left, mid, right);
      }
    }
  }

  return arr[0];
}

function calculate(arr) {
  while (arr.includes('(') && arr.includes(')')) {
    let s = 0,
      e = 0,
      i = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '(') {
        s = i;
      } else if (arr[i] == ')') {
        e = i;
        break;
      }
    }
    let left = arr.slice(0, s);
    let mid = partialCalculate(arr.slice(s + 1, e));
    let right = arr.slice(e + 1, arr.length);

    arr = [].concat(left, mid, right);
  }
  return arr[0];
}

console.log(calculate(arr));
