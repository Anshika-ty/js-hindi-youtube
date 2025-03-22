//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
//eg of each
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

//array
// const heros = ["shaktiman", "naagraj", "doga"];

//objects
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

////function
// const myFunction = function(){
//     console.log("Hello world");
// }

//datatype pta krna h to 
// console.log(typeof anotherId);

 //https://262.ecma-international.org/5.1/#sec-11.4.3
// typeof val 	Result
// Undefined	"undefined"
// Null	    "object"
// Boolean	    "boolean"
// Number	     "number"
// String	     "string"
// Object       "object"
// Object        "function"
// Object (host and does not implement [[Call]])	"undefined", "boolean", "number", or "string".

//+=====================================================================================================
//stack(primitive),  Heap(non-primitive)
 let oldName="anshika"
 let newName=oldName
 newName="anshi tyagi"
 console.log(oldName);
 console.log(newName);

 let user1={
    email:"dcvgdshvhh@gmail.com",
    nam:"anshu"
 }
let user2=user1
user2.email="367367636236@gmil.com";
console.log(user1.email);
console.log(user2.email);