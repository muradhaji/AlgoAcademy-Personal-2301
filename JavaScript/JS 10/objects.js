// let user = new Object();

// user.name = 'John';
// user.age = 25;

// let user = {
//   name: 'John',
//   age: 30,
//   isAdmin: true,
// };

// delete user.age;
// delete user.name;
// delete user.isAdmin;

// delete user;

// console.log(user)

// x = 5;

// console.log(x);

// delete x;

// console.log(x);

// let propName = 'full name';

// let user = {
//   name: 'John',
//   age: 30,
//   'is admin': true,
//   [propName]: 'John Doe',
// };

// user[propName] = 'John Doe';

// let propName = prompt('Prop name:');
// let propValue = prompt('Prop value:');

// // let user = { [propName]: propValue };

// let user = {};

// user[propName] = propValue;

// console.log(user);
// console.log(user[propName]);

// let createUser = (name = '', age = 0, isAdmin = false) => {
//   return {
//     name,
//     age,
//     isAdmin,
//   };
//   // return {
//   //   name: name,
//   //   age: age,
//   //   isAdmin: isAdmin,
//   // };
// };

// let user1 = createUser('John', 27);
// let user2 = createUser('Mike', 37, true);

// user1.name = undefined;
// let isPropertyExist = (obj = {}, propname = '') => {
//   if (obj[propname] === undefined) {
//     return false;
//   } else {
//     return true;
//   }
// };
// console.log(isPropertyExist(user1, 'name'));

// console.log('name' in user1);
// console.log(user1.hasOwnProperty('name'));

// for (let key in user1) {
//   console.log(`${key} -> ${user1[key]}`);
// }

// let arr = [3, false, 7, 'abc'];

// let obj = {
//   0: 3,
//   1: false,
//   2: 7,
//   3: 'abc',
// };

// for (let key in arr) {
//   console.log(`${key} -> ${arr[key]}`);
// }

// for (let key in obj) {
//   console.log(`${key} -> ${obj[key]}`);
// }

// for (let value of arr) {
//   console.log(value);
// }

// let callBackFunction = (value, indx) => {
//   console.log(value, indx);
// };

// arr.forEach(callBackFunction);
// console.log(
//   arr.forEach((v, i, a) => {
//     console.log(v);
//     console.log(i);
//     console.log(a);
//   })
// );

// let arr2 = [-3, 0, 5, 9];

// arr2 = arr2.map(function (v, i) {
//   console.log(i, v);
//   return v * -1;
// });

// console.log(arr2);

// let countryCodes = {
//   "+90": 'Turkey',
//   "+49": 'Germany',
//   "+994": 'Azerbaijan',
//   "+41": 'Switzerland',
//   "+1": 'USA',
//   name: 'John',
//   age: 30,
// };

// for (let key in countryCodes) {
//   console.log(key);
// }

// let x = 5;
// let y = x;

// y = 7;

// let user = { name: 'John', age: 30 };
// let user2 = user;

// user.age = 27;
// user2.name = 'Mike';

let user = {
  name: 'John',
  age: 30,
  university: {
    name: 'BDU',
    city: 'Baku',
  },
  sayHello: function () {
    console.log(`Hi, my name is ${this.name}!`);
    console.log(this);
  },
  // sayHello: () => {
  //   console.log(`Hi, my name is ${this.name}!`);
  //   console.log(this);
  // },
};
let user3 = { isAdmin: true };

let createObjCopy = (sourceObj) => {
  let newObject = {};
  for (let key in sourceObj) {
    if (typeof sourceObj[key] == 'object') {
      newObject[key] = createObjCopy(sourceObj[key]);
    } else {
      newObject[key] = sourceObj[key];
    }
  }
  return newObject;
};

// Method 1
// let user2 = { name: user.name, age: user.age };

// Method 2
// let user2 = {};
// for (key in user) {
//   user2[key] = user[key];
// }
let user2 = createObjCopy(user);

// Method 3
// let user2 = {};
// Object.assign(user2, user);
// Object.assign(user2, user, user3);

// Method 4
// let user2 = structuredClone(user);

user.age = 27;
user2.name = 'Mike';
user2.university.name = 'GDU';
user2.university.city = 'Ganja';
// user2.sayHello = function () {
//   console.log('Hi, my name is Mike!');
// };

user.sayHello();
user2.sayHello();

console.log(user);
console.log(user2);
