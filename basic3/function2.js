/* another way of giving parameter
- suppose we are building a shopping cart and we dont know how many arguments will be there.
then we will use this */
// we can do this by using rest operator(...) it will return an array.

function calculateCartprice(...num1){
    return num1;

}

console.log(calculateCartprice(200,66,78,89,54));
// from this method we can solve the above problem 
// now  we have array in return we can perform array methods on it.
function calculateCartprice(val1,val2,...num1){
    return num1;

}

console.log(calculateCartprice(200,66,78,89,54,78));
// the starting 2 values will get stored in val1 and val2 (200, 66 ) rest remains with num1

// how can we pass object into function 

let user = {
    username : "Arpan",
    price : 488,
}
function handleObj(anyobject){

    console.log( `the user name is ${anyobject.username} and the price is ${anyobject.price}`);

}
handleObj(user)


handleObj({
    username:"Sheenu",
    price : 789,
})

// how to pass arrays.

let Myarr = [200,400,500,500,400]

function findArrIndex(anyarray){
    return anyarray[2];
}

console.log(findArrIndex(Myarr));

console.log(findArrIndex([300,786,989,766,987]));

