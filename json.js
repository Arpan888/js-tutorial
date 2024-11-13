// object destructuring

const course = {
    coursename : " js in hindi",
    coursePrice: 999,
    courseInstructor : "Hitesh",
}

const {courseInstructor:instructor} = course;

console.log(instructor);// destructuring done

const {coursePrice:cp} = course;
const {coursename:cn}=course;
console.log(`this is the information about the course ${cn} and ${cp}`);

/* json syntax 
{
"name": "Arpan",
"age" : 78,
"email" : "chauarpa@amzn",
}
*/
