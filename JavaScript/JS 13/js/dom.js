// function sayHello() {
//   console.log(this);
// }

// let user = {
//   name: 'John',
//   talk: sayHello,
// };

// sayHello();
// window.sayHello();
// user.talk();

// console.log(this);
// console.log(window);

// window.alert();
// window.prompt();
// window.confirm();
// window.Infinity;

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(innerHeight);
// console.log(innerWidth);
// console.log(outerHeight);
// console.log(outerWidth);

// DOM
// document.body.innerHTML += '<h1>Hello World</h1>';

// CSSOM
// document.body.style.background = 'red';
// setTimeout(() => (document.body.style.background = 'black'), 3000);

// BOM
// console.log(navigator.userAgent.includes('Firefox'));

// navigator.geolocation.getCurrentPosition(
//   (qwe) => {
//     console.log(qwe.coords.latitude, qwe.coords.longitude);
//   },
//   (err) => {
//     console.log(err.message);
//   }
// );

// console.log(navigator.platform);

// console.log(location);
// console.log(location.reload());
// console.log(location.replace('https://www.azza.az'));
// console.log(location.toString());
// console.log(location.assign('https://www.azza.az'));

// document.body.innerHTML += `<h1>${screen.colorDepth}</h1>`;
// document.body.innerHTML += `<h1>${screen.pixelDepth}</h1>`;

// function loadXMLDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       let data = JSON.parse(this.responseText);
//       let str = '';
//       for (const key in data) {
//         str += `<h1>${data[key].completed ? '✅' : '❌'} - ${
//           data[key].title
//         }</h1>`;
//       }
//       document.getElementById('demo').innerHTML = str;
//     }
//   };
//   xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
//   xhttp.send();
// }

// console.log(document);
// console.log(document.children);
// console.log(document.children[0]);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// console.log(document.childNodes);
// console.log(document.childNodes[1].childNodes);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.firstChild);
// console.log(document.lastChild);

// let myUl = document.body.childNodes[5];

// for (let i = 0; i < myUl.childNodes.length; i++) {
//   if (myUl.childNodes[i].nodeType == 1) {
//     console.log(myUl.childNodes[i]);
//   }
// }

// console.log(document.body.childNodes[5].childNodes[1].nextSibling.nextSibling);
// console.log(
//   document.body.childNodes[5].childNodes[3].previousSibling.previousSibling
// );

// console.log(document.head.parentNode);
// console.log(document.body.parentNode);
// console.log(document.head.parentNode == document.body.parentNode);
// console.log(document.head.previousSibling);

// console.log(document.childNodes);
// console.log(document.children);

// console.log(document.documentElement.childNodes);
// console.log(document.documentElement.children);

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.children[2]);
// console.log(document.body.children.list1);
// console.log(list1);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.body.children[2].children[2].previousSibling);
// console.log(document.body.children[2].children[2].previousElementSibling);

// console.log(document.body.children[2].children[2].nextSibling);
// console.log(document.body.children[2].children[2].nextElementSibling);

// console.log(document.documentElement.parentNode);
// console.log(document.documentElement.parentElement);

// console.log(document.body.childNodes[5]);
// console.log(document.body.children[2]);
// console.log(document.body.children.list1);
// console.log(list1);
// let list1 = [1, 3, 5, 7];
// console.log(list1);
// console.log(document.getElementById('list1'));

// console.log(document.querySelectorAll('ul#list1 > li'));
// console.log(document.querySelectorAll('ul#list2 > li'));

// console.log(document.querySelectorAll('ul#list1 > li')[0]);
// console.log(document.querySelector('ul#list1 > li'));

// console.log(document.getelements);

// demo.innerHTML = "asdqwe";

// ----------
// Task
// ----------
// let users = ['John', 'Andrei', 'Mike'];
// adlardan birini h1-e inner html olaraq random secib vermek
