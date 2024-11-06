const score = 400;
console.log(score);

const balance = new Number(9000);
console.log(balance);

// we can convert the number into string by using to string()

console.log(balance.toString().length);
// after converting into string we can apply string methods to it.

console.log(balance.toFixed(2));
// we can use this method in making e commerce website, it addes .00 on the right side of the number.

let otherno = 23.8966;
console.log(otherno.toPrecision(3));
// priority is given to the no on the left side of the '.' and if less no is selected then it will give exponential value , it returns string.


const hundreds = 1000000000;
console.log(hundreds.toLocaleString('en-In'));
// it addes ',' to the number to simplify the count of 0s

//************************************************************************************************************** */

// maths - it is a library

console.log(Math);
console.log(Math.abs(-99));

// abs - absolute value which means it will convert the negative no to positive but the positive remains positive.

console.log(Math.round(4.3));
console.log(Math.ceil(4.3));// takes the bigger value
console.log(Math.floor(4.3));// takes the smaller value.

console.log(Math.min(23,56,87,9));
console.log(Math.max(23,56,87,9));

// Math.random  it values is always within 0 to 1 .

console.log(Math.random());

console.log((Math.random()*100)+1);
// to get precise value we can wrap it up with floor.

console.log(Math.floor(Math.random()*10)+1); // it will give precise value.

// if we want js to give randomly number between min and max.
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*10)+min);







