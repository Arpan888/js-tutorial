// we can iterate the object with the help of forin loop

const langObj = {
    js : "Javascrip",
    cp : "c++",
    rb : "Ruby",
    sw : "Swift"
}
for (const key in langObj) {
    console.log(` The key is ${key} and the value of the key is ${langObj[key]}`);
    
    
}
// using forin on arrays. It will only print the index not the value.
let programming = ["javascript","rb","sw","cpp"]

for (const key in programming) {
    console.log(key);
    
}

// forin map 

let City = new Map();
City.set('gzbd',"ghaziabad")
City.set('del',"Delhi")
City.set('luc',"lucknow")


for (const key in City) {
    console.log(key);
    
    
}
// it will not run because map is not iterable.


///////////////////////// for each loop
// it is a high order function

// let programming = ["javascript","rb","sw","cpp"]

programming.forEach(function(item){
    console.log(item);
    

})

// we can also use arrow function.

let printme  = (item) => {
    console.log(item);
    
}

programming.forEach(printme)

// in foreach we can give arr element arr index and full array as a parameter all together.

programming.forEach((arr,index,fullarray)=>{
    console.log(arr,index,fullarray);
    
})

// when we get the value from the database it comes in this for [{},{},{}]

let coding = [{
 langname : "Javascript",
 code : "js"
},
{
    langname:"c++",
    code: "cpp",
},
{
    langname : "java",
    code : "java"
}


]

coding.forEach((item) => {
console.log(item.langname,"and the code is",item.code);

})