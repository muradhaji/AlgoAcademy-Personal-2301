// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1].nodeType);
// console.log(document.body.childNodes[2].nodeType);
// console.log(document.body.childNodes[5].nodeType);
// console.log(document.body.attributes[1].nodeType);
// console.log(document.nodeType);

// console.log(document.body.childNodes[1].nodeName);
// console.log(document.body.childNodes[1].tagName);
// console.log(document.body.childNodes[2].nodeName);
// console.log(document.body.childNodes[2].tagName);
// console.log(document.body.childNodes[5].nodeName);
// console.log(document.body.childNodes[5].tagName);
// console.log(document.body.attributes[1].nodeName);
// console.log(document.body.attributes[1].tagName);
// console.log(document.nodeName);
// console.log(document.tagName);

// console.log(document.body.childNodes[2].nodeValue);
// console.log(document.body.childNodes[2].data);
// console.log(document.body.childNodes[5].nodeValue);
// console.log(document.body.childNodes[5].data);
// console.log(document.body.attributes[1].nodeName);
// console.log(document.body.attributes[1].nodeValue);

// console.log(document.getElementById('myul').innerHTML);
// console.log(document.getElementById('myul').outerHTML);
// console.log(document.getElementById('myul').textContent);
// console.log(document.getElementById('myul').innerText);

// document.body.innerHTML = '<p>This is paragraph</p>';
// document.body.textContent = '<p>This is paragraph</p>';
// document.body.innerText = '<p>This is paragraph</p>';

// console.log(document.body.hasAttribute('class'));
// console.log(document.body.hasAttribute('style'));

// console.log(document.body.getAttribute('class'));
// console.log(document.body.getAttribute('style'));

// console.log(document.body.setAttribute('style', 'background-color: cyan;'));
// document.body.removeAttribute('style');

// console.log(document.body.attributes);

// for (let i = 0; i < document.body.attributes.length; i++) {
//   console.log(
//     `${document.body.attributes[i].name} -> ${document.body.attributes[i].value}`
//   );
// }

// console.log({ name: 'John', age: 27 });
// console.table({ name: 'John', age: 27 });
// console.dir({ name: 'John', age: 27 });

// console.log(document.body.id);
// console.log(document.body.title);
// console.log(document.body.hasAttribute('my-custom-prop'));
// console.log(document.body.getAttribute('my-custom-prop'));
// console.log(document.body.getAttribute('data-last-name'));
// console.log(document.body.dataset);
// console.log(document.body.dataset.name);
// console.log(document.body.dataset.age);
// console.log(document.body.dataset.lastName);
// document.body.dataset.isMarried = true;

// function showNotMessage(notMessage = '...', notType = 'success') {
//   let notDiv = document.createElement('div');
//   notDiv.classList.add('notificationDiv', notType);
//   let existNotifications = document.querySelectorAll('.notificationDiv').length;
//   if (existNotifications > 0) {
//     notDiv.style.top = `${(1 + existNotifications) * 50}px`;
//   }
//   // let divInnerText = document.createTextNode('This is warning message');
//   // notDiv.append(divInnerText);
//   notDiv.innerText = notMessage;
//   document.body.append(notDiv);
//   setTimeout(() => {
//     document.body.removeChild(notDiv);
//   }, 2000);
// }

// showNotMessage('This is danger not...', 'danger');
// setTimeout(() => {
//   showNotMessage('This is success not...', 'success');
// }, 1000);

// Swal.fire({
//   title: 'Qebul edirsen?',
//   showDenyButton: true,
//   showCancelButton: true,
//   confirmButtonText: 'Beli',
//   denyButtonText: `Xeyr`,
//   cancelButtonText: `Legv`,
// }).then((result) => {
//   if (result.isConfirmed) {
//     console.log('Qebul etdi');
//   } else if (result.isDenied) {
//     console.log('Inkar etdi');
//   } else if (result.isDismissed) {
//     console.log('Lehgv etdi');
//   }
// });

// let x = document.getElementById('myul');

// // let y = x.cloneNode();
// let y = x.cloneNode(true);
// y.id = 'myul2';

// document.body.append(y);

// let fragment = new DocumentFragment();

// for (let i = 1; i <= 3; i++) {
//   let x = document.createElement('li');
//   x.innerText = `Item ${i}`;
//   fragment.append(x);
// }

// console.log(fragment);

// document.body.append(fragment);

// document.write('<p>akjsbhdhavsd</p>');

// setTimeout(() => {
//   document.write('<p>akjsbhdhavsd</p>');
// }, 5000);

// document.body.style.backgroundColor = 'black';
// document.body.style.setProperty('background-color', 'black', 'important');
// document.body.style.setProperty('color', 'white');
// console.log(document.body.style.getPropertyPriority('background-color'));
// console.log(document.body.style.getPropertyPriority('color'));

console.log(document.body.style.backgroundColor);

console.log(getComputedStyle(document.body).backgroundColor);
console.log(getComputedStyle(document.body).color);
