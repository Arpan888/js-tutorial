// arrow functions and this keyword______________________________________

// this -  tell about the current context 

const user = {
    username : "Arpan",
    price : 689,
    WelcomeMessage: function(){
        console.log(`${this.username},Welcome User`);
        console.log(this);
        }
}
 user.WelcomeMessage();

 user.username = "Shinu";
 user.WelcomeMessage()

 console.log(this);
 // in browser it is not empty it will show window object .

 // we cant use this keyword in function like we did in objects.

 function chai(){
    let username = "Arpan";
    console.log(this.username);
    
 }
chai(); // it will show undefined 

let chai1 = function(){
    let username = "sheinu"
    console.log(this.username);
    
}
chai1()// it will also show undefined.

 //----------------arrow function
let chai3 = () => {
    let username = "andy";
    console.log(this.username);
    
}

chai3()

 // implicit return in arrow functions

 let sum = (num1,num2) => num1+num2 ;

 console.log(`the sum of the 2 numbers is =${sum(45,78)}`);
 

 