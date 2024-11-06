let name = "Arpan chaudhary";
let repcount = 50;

// we will concat these 2 by using string interpolation.
console.log(`My name is ${name} and my repository count is ${repcount} .`);

// another way to write string.

let gameName = new String('Fifa23-eaSports');
// it will make the string object and it will also show the length in the console of the browser.

console.log(gameName[3]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

let newstr = gameName.substring(0,5);
console.log(newstr);
// we cant give negative values of index in substring method.

console.log(gameName.slice(0,5));
// we can give negaTIVE value in slice

// trim method it removes the space for eg if user has entered the space it will remove it, it only works on white space characters.

let usrname = "  Arpan  ";
console.log(usrname);
console.log(usrname.trim());

let url = "http://arpan.com/arpan%20chaudhary";
console.log(url.replace('%20','_'));



 // if we want to convert a string into an array then we use split method.



let adhrname = "Arpan-chaudhary-solanki";
console.log(adhrname.split('-'));


