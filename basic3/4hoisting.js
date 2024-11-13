// nested scopes

function one(){
let username = "Arpan";
console.log("hello");

function two(){
    let website = "youtube";
    console.log(username);   // the child function can acess the variables of the parent function but not the parent function.
    // for function 2 the global scope is the block scope of function 1 
}


two();
}
one()

//___________________________________________HOISTING_________________________________
console.log(addone(6));
function addone(num){
return num+1;
}   // it will get print before the function declaration also.

let addtwo = function(num){
    return num+2 ;
}   // if we call the function before declaration it will show error.

console.log(addtwo(8));
