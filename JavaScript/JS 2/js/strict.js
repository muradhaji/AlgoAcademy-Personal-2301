'use strict';

let x = 7;
console.log(x);

// Not working here, must at the top
// 'use strict';

// message = 'Hello';
// console.log(message);

function test() {
  // Works only inside of function
  // 'use strict';
  username = 'Jhon';
  console.log(username);
}

test();
