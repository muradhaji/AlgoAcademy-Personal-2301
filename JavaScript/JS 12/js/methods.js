// // let num = 255;
// let num = 255.127;

// console.log(num.toString(10));
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));
// console.log(num.toString(36));
// console.log(num.toString(5));
// console.log(123..toString(5));
// console.log(123.456.toString(5));

// console.log(Math.floor(2.1));
// console.log(Math.floor(2.9));

// console.log(Math.floor(-2.1));
// console.log(Math.floor(-2.9));

// console.log(Math.ceil(2.1));
// console.log(Math.ceil(2.9));

// console.log(Math.ceil(-2.1));
// console.log(Math.ceil(-2.9));

// console.log(Math.round(2.1));
// console.log(Math.round(2.4));
// console.log(Math.round(2.5));
// console.log(Math.round(2.9));

// console.log(Math.trunc(2.1));
// console.log(Math.trunc(2.4));
// console.log(Math.trunc(2.5));
// console.log(Math.trunc(2.9));

// console.log((123).toFixed(5));
// console.log((123.456).toFixed(10));

// console.log(isFinite(1 / 0));
// console.log(isFinite(-1 / 0));
// console.log(isFinite("asd" / 2));
// console.log(isFinite("48" / 2));

// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log(NaN === 'asd' / 2);
// console.log(isNaN('asd' / 2));
// console.log(isNaN('x'));

// console.log(parseInt(5 / 2));
// console.log(Number('100px'));
// console.log(parseInt('100px'));
// console.log(parseInt('2.75em'));
// console.log(parseFloat('2.75em'));
// console.log(parseFloat('2,75em'));
// console.log(parseFloat('00004.9'));
// console.log(parseInt('ff'));
// console.log(parseInt('ff', 16));
// console.log(parseInt('237', 8));
// console.log(parseInt((42).toString(7), 7));

// console.log(Math.random());
// console.log(Math.floor(1 + Math.random() * 6));
// console.log(Math.floor(1 + Math.random() * 6));

// let arr = ['John', 'Mike', 'Ross'];

// let randomI = Math.floor(Math.random() * arr.length);

// console.log(arr[randomI]);

// function test(a, b) {
//   console.log(a, b);
//   console.log(arguments);
//   let min = Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] < min) {
//       min = arguments[i];
//     }
//   }
//   return min;
// }

// console.log(test(4, -1, 10));

// console.log(Math.sign(-123));
// console.log(Math.sign(0));
// console.log(Math.sign(75));

// let user = {
//   name: 'John',
//   university: { name: 'BDU' },
//   test: () => {
//     console.log(this.name);
//   },
// };
// let user2 = _.cloneDeep(user);
// user2.name = 'Mike';
// user2.university.name = 'GDU';

// console.log(user);
// console.log(user2);

// console.log(`Hello
// World`);

// console.log("Hello\n\"World\"\b\t\tBook\\");

let str = 'Qwerty Aasdfg';

// console.log(str[str.length - 1])
// console.log(str.at(0));
// console.log(str.at(-1));
// console.log(str.charAt(0));
// console.log(str.charAt(3));
// console.log(str.charCodeAt(1));

// console.log(str.concat('zxc', 'tyu'));
// console.log(''.concat(['zxc', 'tyu']));
// console.log(''.concat('zxc', 'tyu'));

// console.log('qwerty'.endsWith('qty'));
// console.log('qwerty'.startsWith('q'));
// console.log('qwerty'.includes('t'));
// console.log('qwerty'.indexOf('rt'));
// console.log('qwerty'.replace('wes', 'as'));
// console.log('qwerty'.slice(2, 5));
// console.log('qw.er.ty'.split('.'));
// console.log('qw.er.ty.nh'.split('.').join("/"));
// console.log(['asd', 'qwe', 'zxc'].concat('fgh'));
// console.log(
//   ['asd', 'qwe', 'zxc'].find((v, i) => {
//     return v == 'qw';
//   })
// );
// console.log(['asd', 'qwe', 'zxc'].map((x) => x + '2'));
// console.log(['qwe', 'asd', 'zxc'].sort());
// console.log(
//   [2, 11, 3, 1, 33].sort(function (a, b) {
//     return a - b;
//   })
// );
// console.log(
//   [2, 11, 3, 1, 33].sort((a, b) => {
//     console.log(a, b);
//     return a - b;
//   })
// );

// function includes(str, srch) {
//   return true / false;
// }
includes('akwlejrhgdbsfdbvhi', 'jrh');
includes('akwlejrhgdbsfdbvhi', 'jeh');
includes('akwlejrhgdbsfdbvhi', 'hi');
