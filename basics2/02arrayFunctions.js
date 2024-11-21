let marvel_heroes = ["thor","ironman","spiderman"];
let dc_heroes = ["superman","flash","batman"];

//marvel_heroes.push(dc_heroes);  // it will print an array into an array [ "spiderman",[]]
//console.log(marvel_heroes);  

// to avoid the above issue we can use concat.

let abc = marvel_heroes.concat(dc_heroes);
console.log(abc);
// issue is resolved no array in array is printed.


//we can concat multipes array using spread operator.

let allnewheros = [...marvel_heroes,...dc_heroes,...abc];
console.log(allnewheros);
// this is how spread works.

//we can use flat method with infinity as arg. to spread out complex arrays. for eg - 

let another_array = [1,2,3,[4,5,6,[77,66,88]],98,75,[67,78,88,[1,2,3]]];

let real_array = another_array.flat(Infinity);
console.log(real_array);

// use for data scrapping
//to check if the value is array or not we use isarray()

console.log(Array.isArray("Arpan"));

// to convert anything to array we use from()

console.log(Array.from("Arpan"));
console.log(Array.from({name: "Arpan"}));

// to convert multiple variables into array we use of()

let score1 = 200;
let score2 = 300;
let xc = "wagon";

console.log(Array.of(score1,score2,xc));




