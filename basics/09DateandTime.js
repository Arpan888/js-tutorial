let MyDate = new Date();
console.log(MyDate);
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toISOString());
console.log(MyDate.toJSON());
console.log(MyDate.toLocaleString());

console.log(typeof MyDate);   // it is an object

// to write your own date 
let CreatedDate = new Date(2025,0,17,22,8); // in this format month is taken from 0 
console.log(CreatedDate.toLocaleString());

// format 2  in dd/mm/yy we will take the month from 1 
let CreatedDate1 = new Date("2025-1-17");
console.log(CreatedDate1);

// we can also take timestamp in date , can we used in designing quizes and poles gives milisecond
 let timestamp = Date.now();
 console.log(timestamp);

 console.log(CreatedDate1.getTime());  // from this we can compare the 2 values  
 // how to convert the miliseconds into seconds interview ques.

 console.log(Math.floor(Date.now()/1000));  // now it is converted into seconds with floor value



let newDate = new Date();
console.log(newDate.getMonth()+1);

console.log(`The month today is ${newDate.getMonth()+1}th and the day is ${newDate.getDay()+1}th`);

console.log(newDate.toLocaleString('default',{
    weekday:"long",
year:"numeric"}));
// this is how we can declare an object in to localestring method , (we can check the options by ctrl+space)



 
 


 


 


