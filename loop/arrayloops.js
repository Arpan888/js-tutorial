// for of loop 
//array specific loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
    
}
 let greeting = "Hello world"

 for (const str of greeting) {
    console.log(greeting);
    
    
 }

 // maps are similar like array
// map objects hold key value pair in the order in which the keys are inserted, no duplicate values are there.


 const map = new Map()
 map.set('in',"India")
 map.set('usa',"America")
 map.set('jp',"japan")
 console.log(map);
 
 for (const element of map) {
    console.log(element);
    
 }

 // to print the key or value we can use 

 for (const [key,value] of map) {
    console.log(key,":-",value);
    
    
 }

 // for of on object
// obj is not iterable
 let gameobj = {
    game1 : "Fifa23",
    game2 : "valorant"
 }

 for (const [key] of gameobj) {
    console.log(key);
    
    
 }
// we can iterate the object with the help of forin loop

