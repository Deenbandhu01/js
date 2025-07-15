// primitive 

// 7 types : string , number , boolean, null, undefined, symbol , BigInt

const score = 100
const scoreValue = 100.562
const isLoggedIn = true
const outsideTemp = null
let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 7896374185968574
console.log(bigNumber)

// Reference (Non primitive)

// Array, Objects, functions

const heros = ["shaktiman","naagraj","doga"]
console.log(heros);

let myObj = {
    name:"deen",
    age:22,
}
console.log(myObj);

const myFunction = function(){
    console.log("hello world");
    
}

console.log(myFunction);
myFunction();

console.log(typeof myFunction)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof heros);
