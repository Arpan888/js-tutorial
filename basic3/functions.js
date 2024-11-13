// we pack our code into packages to make our task easy.

function sayMyname(){
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("A");
    console.log("N");
    
}

sayMyname // it is only the function reference
//sayMyname(); // it is the excution.

function add2num(number1,number2) {
    let result = number1+number2;
    return result // nothing will get print after this.// we can also use (return number1+number2)
}

let result = add2num(8787.897,6543.786);
console.log(result);


function userJustLoggedin(username) {
    if (username===undefined)/* we can also write (!username)*/
     {
        console.log("Please enter the username");
        
        
    }
    return `${username} just logged in`
}

console.log(userJustLoggedin("Arpan"));
// when no argument is passed then it will show undefined.
// we can also give default value in the parameter