let score = "33abc";
console.log("the value before conversion ",typeof score);

let valueInNumber = Number(score);

console.log("the value after conversion",typeof valueInNumber);

console.log(valueInNumber);
 

/* "33" = 33  type is number
"33abc" = NaN  type is number
true = 1 
null = 0 type number
*/

let isLoggedIn = 1;
let booleanloggedIn = Boolean(isLoggedIn);
console.log(booleanloggedIn);

/* if you dont give any value then it will show false and if value is given then it will show true but not for 0
1 = true ; 0 = false
"" = false
"Arpan" = true
*/


let num = 33;
 let stringnum = String(num);

 console.log(stringnum);
 console.log(typeof stringnum)
 