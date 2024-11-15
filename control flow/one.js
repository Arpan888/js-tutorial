// if  it will only get executed when the condition is true .
// && both should be true

// || or any one should be true 

// switch case statement 


const month = 3;
switch (month) {
    case 1:
        
        break;

    default:
        break;
}

//  truthy and falsy values
// for example we are quering for user email from database.

let userEmail = [];

if (userEmail) {
    console.log("We have got the user email");
    
}
else{
    console.log("We dont have the user email");
    
}

// if we enter empty string "" in the email then else will run, if empty [] then if will run 
// falsy values - 0 , -0, "", bigint- 0n , null, undefined,false(boolean), NaN
// rest all the values are truthy
// truthy value example - "0",'false', " ",[],{}, function(){}

let emptyArr = [];

if(emptyArr.length===0){
    console.log('empty array');
    
}

let emptyObj = {};

// to check the object we will use Object.keys(emptyobj) - it will create the arr of keys then we can apply length.


if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}

// nullish coalescing operator (??) : null/undefined m use hota h 

let val1;
val1 = null ?? 10 ; 
console.log(val1);

// turniary operator
// condition ? true:false

let iceTeaPrice = 100;

iceTeaPrice <=80 ? console.log("less than 80"): console.log("More than 80");

