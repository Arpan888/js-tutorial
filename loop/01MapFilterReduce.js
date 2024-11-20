// for each loop returns nothing, if we will store it in a variable then it will show undefined when printed.

let game = ["fifa","ea sports","nfs","spiderman","roadrash"]

let doom = game.forEach((val)=>{
    // console.log(val);
    
    

})
console.log(doom);
// we can solve this problem with the help of filters.
// in filters a condition is given with {} we have to use return or we can do without it, if the condition is true only then the value will get printed.

let myNum = [1,2,3,4,5,6,7,8,9,10]
let newNum = myNum.filter((val) => val >4 )

console.log(newNum);

// we can also do the above task with the help of foreach

let num = [];
myNum.forEach((val)=>{
    if (val > 6) {
        // console.log(val);
        num.push(val)
        
    }

})

console.log(num);


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((val)=>{
    console.log(val.languageFileName);
    // we can also store the above value into and by push method and declaring an empty array.
    

})

const coding = ["js", "ruby", "java", "python", "cpp"]
let code = []
coding.forEach((val)=>{
if (val === "js" || val === "java") {
    code.push(val)
    
    
}

})
console.log(code);

// we can also use it with the function 
function printme (val)  {
   console.log(val);
   

}
coding.forEach(printme)