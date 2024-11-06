// js arrays are resizable and they can store diffrent types of data types
let array1 = [1,2,3,4,5,true,"Arpan"];
console.log(array1);
console.log(array1[5]); // this is how arrays are accesed.

// shallow copy - the object created shares the same reference pt.
// deep copy - don't share the same reference pt.

// Whenever copy operation in done in arrays, they will create a shallow copy.
// which means the original array will change if any change in the copied array is done.
// for eg.

let copyArray1 = array1;
copyArray1[3] = 77;
console.log(array1); // this shows that 4 is replaced by 77.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-------ARRAY METHOD----------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

array1.push(78);
array1.push(88); // it will add 88 to the end of the array
console.log(array1);

array1.pop()  // it will remove the end element and no arg. is passed.
console.log(array1);

array1.unshift("chaudhary"); // it will add this value in front of the array and shift other values,
 // it slow downs the optimization if the array is big.
 console.log(array1);
 // to remove the first element we use shift and no arg. is passed similar to pop.

 console.log(array1.includes("singh")); // it will give the result in boolean and tells that is in it or no.
 console.log(array1.indexOf(77));  // tells the index and if the item is not in the array it will give -1.

let newArray = array1.join() // it will convert the array into string.
console.log(newArray);


//slice and splice

let mna1 = array1.slice(0,4);  // it will start from 0 and go till 3 original array is not changed.
console.log(mna1);
console.log("A",array1);

let mna2 = array1.splice(0,2);
console.log(mna2);
// it will permanently delete the items from array (0 and 1 index), it will manipulate the original array.
console.log("B",array1);





 

 
 
 






