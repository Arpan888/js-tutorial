// we can declare objects by 2 methods - obj literals and obj constructor
// obj literals - no singleton is created
// obj constructor singleton is created  (object.create)
// singleton- unique object.
// obj is the pair of key value.

const mySym = Symbol("key1");
let jsUser = {
    name : "Arpan",
    city : "Ghaziabad",
    Age : 108,
    [mySym] : "Mykey",
};

// we can acess the value of objects by 2 methods.
console.log(jsUser.city);
console.log(jsUser["Age"]);  // this method is prefered.

// how to add a symbol as the key in the object (interview ques)



console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

console.log(jsUser);

jsUser.city = "Wavecity";

console.log(jsUser);

// Object.freeze(jsUser) // now we cant make any change in the object.

jsUser.Age = 18;

console.log(jsUser);

// how to add function in the object

jsUser.greetings = function(){
    console.log("Hello js user");
    
}

jsUser.greetings2 = function() {
    console.log(`Hello jsuser, ${this.name}`);
    
}

console.log(jsUser.greetings());
console.log(jsUser.greetings2());
console.log(jsUser.greetings);

//_____________________________________________part 2 __________________________________________________________
// declaring an object with the help of constructor.
// it will create a singleton.

const tinderUser = new Object();
console.log(tinderUser); // it will show empty {} - singleton object
const tinderUser1 = {};
console.log(tinderUser1); // it will also show {} - but non singleton it an obj literal.

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
tinderUser.Age = 45;


console.log(tinderUser);
// how to declare an object in the object.

const wpuser = {
    email : "Chauarpa@kotak",
    Age : 45,
    fullname : {
        username : {
            firstname: "Arpan",
            Lastname: "Chaoudhary",
        }
       
    }
    
}
console.log(wpuser);

console.log(wpuser.fullname.username);


// optional chaining (?)

// how to combine 2 objects - 

const obj3 = Object.assign({},tinderUser,wpuser);
console.log(obj3);

let obj1 = {1:"a",2:"b",3:"c"};
let obj2 = {4:"d",5:"e",6:"f"};

let obj4 = Object.assign({},obj1,obj2);
console.log(obj4);

let result = {...obj1,...obj2}; // we can also do this by spread method
console.log(result);

// if we are working on a value which comes from database then we can find the keys of the object and then it will return array.
console.log(Object.keys(tinderUser)); // it will return an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


//hasownproperty



