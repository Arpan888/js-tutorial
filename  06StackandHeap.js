let score = 678;
let score2 = score;
console.log("score before updation ",score2)
score2 = 555;

console.log("score after updation ",score2);

// all primitive datatypes are stored in stack memory which means that we will get the copy if we make any change the copy will chang


let user1 = {
    email : "chauarpa@amazon",
    upiId : "chauarpa@kotak",
};

let user2 = user1;
console.log(user2);

user2.email = "chaman@andal.com";

console.log(user1.email);
console.log(user2.email);

// non primitive are stored in heap in which we get the reference of the original value any change will change the original val.