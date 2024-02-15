//Correct way
//"use strict";

let message = "Hello World";
console.log(message);

// no activated
//"use strict"
age = 25;
console.log(age);

function sumTwo() {
    //Correct way
    "use strict";
    let x1 = 5;
    x2 = 8;
    // no activated
    // "use strict"; 
    console.log(x1 + x2);
}

sumTwo();