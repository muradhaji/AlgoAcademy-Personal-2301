// function testF1(x) {
//   console.log('Worked 1!');
//   console.log(this);
//   console.log(x);
// }

// function testF2() {
//   console.log('Worked 2!');
// }

// let myh = document.getElementById('myh');

// myh.onclick = testF1(); // Wrong
// myh.onclick = testF1;
// myh.onclick = () => {
//   testF1();
//   testF2();
// };

// document.addEventListener('DOMContentLoaded', testF1);
// document.addEventListener('DOMContentLoaded', () => {});

// myh.addEventListener('click', testF1);
// myh.addEventListener('click', testF2);
// myh.removeEventListener('click', testF1);

// Wrong way
// myh.removeEventListener('click', function testF1() {
//   console.log('Worked 1!');
// });

// myh.addEventListener('click', testF2, { once: true });

// myh.setAttribute('onclick', () => {});

// myh.onclick = testF;
// myh.addEventListener('click', testF);

// function testF(event) {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
//   console.log(event.clientX);
//   console.log(event.clientY);
// }

// document.querySelector('.parent').addEventListener('click', clickParent);
// document.querySelector('.middle').addEventListener('click', clickMiddle);
// document.querySelector('.child').addEventListener('click', clickChild);

// function clickParent(event) {
//   console.log('Parent clicked');
// }
// function clickMiddle(event) {
//   event.stopPropagation();
//   console.log('Middle clicked');
// }
// function clickChild(event) {
//   event.stopPropagation();
//   console.log('Child clicked');
// }

// function asd(event) {
//   console.log('Link clicked');
//   event.preventDefault();
// }

// window.addEventListener('mousemove', (event) => {
//   document.body.innerHTML = `${event.clientX} : ${event.clientY}`;
// });

// window.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
//   console.log('Mouse right clicked');
// });

// document.querySelector('div.parent').addEventListener('mouseover', (event) => {
//   console.log(event.target);
// });
// document.querySelector('div.parent').addEventListener('mouseenter', (event) => {
//   console.log(event.target);
// });

let x;

document.getElementById('div1').addEventListener('mousedown', (event) => {
  x = event.target;
});
window.addEventListener('mousemove', (event) => {
  if (x) {
    x.style.position = 'fixed';
    x.style.left = event.clientX + 'px';
    x.style.top = event.clientY + 'px';
  }
});
document.getElementById('div2').addEventListener('mouseup', (event) => {
  x.style.position = 'static';
  event.target.after(x);
});

window.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.code === 'KeyS') {
    event.preventDefault();
  }
  console.log(event);
});
