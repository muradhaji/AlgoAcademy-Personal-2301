// let user = {
//   name: 'John',
//   age: 27,
//   sayName: function () {
//     // console.log(this);
//     // console.log('Hi my name is ' + user.name);
//   },
//   // sayAge: function () {
//   //   console.log('I am ' + this.age + ' years old');
//   // },
//   // sayAge: function () {
//   //   let arrFunc = () => {
//   //     console.log('I am ' + this.age + ' years old');
//   //   };
//   //   arrFunc();
//   // },
//   // sayName() {},
// };

// let user2 = Object.assign({}, user);
// user2.name = 'Mike';
// user2.age = 42;

// user.sayAge();
// user2.sayAge();

// function sayHi() {
//   console.log(this);
// }

// let usr1 = {
//   name: 'John',
//   // testFunc: sayHi,
// };
// let usr2 = {
//   name: 'Mike',
//   // testFunc: sayHi,
// };

// usr1.testFunc = sayHi;
// usr2.testFunc = sayHi;

// usr1.testFunc();
// usr2.testFunc();

// sayHi();

// function User(name, age) {
//   let newuser = {};

//   newuser.name = name;
//   newuser.age = age;

//   return newuser;
// }
// let usr1 = User('John', 27);

// function User(name = 'Anonym', age = 0) {
//   this.name = name;
//   this.age = age;
// }
// let usr = { name: 'John' };
// let usr1 = new User('John', 27);
// let usr2 = new User('John');
// let usr3 = new User(undefined, 27);

// let x = new Object(true);

// let user = {
//   name: 'John',
//   unvercity: {
//     name: 'BDU',
//     city: 'Baku',
//   },
//   // sayHi() {
//   //   console.log('Hello');
//   // },
// };

// delete user.unvercity;

// console.log(user.unvercity.city);

// console.log(user.unvercity ? user.unvercity.city : undefined);

// console.log(user.unvercity?.city);

// user?.Age = 25;

// let id = Symbol

// let id = Symbol('user id');

// console.log(id);
// console.log(id.toString());
// console.log(id.valueOf());
// console.log(id.description);

// let user = { name: 'John', age: 27, id: 42 };

// // let key = 'id';
// let key = Symbol('id');
// let key2 = Symbol('name');
// let key3 = Symbol('name');

// user[key] = 13;
// user[key2] = '$' + user.name;
// user[key3] = '_' + user.name;

// // console.log(user[key]);
// // console.log(user[key2]);
// // console.log(user[key3]);

// for (x in user) {
//   console.log(x);
// }

let user = {
  [Symbol.toPrimitive]: function (hint) {
    return hint == 'string' ? this.name : hint == 'number' ? this.age : 0;
  },
  name: 'John',
  age: 30,
};
