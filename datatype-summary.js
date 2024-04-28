//Types 

//1 Primitive- 7 Types 
// String, Number, Symbols, BigInt, Boolean, Null, Undefined

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);



//2 Non-Primitive Or (refference)
//Array, Objects, Functions

const heros = [ "shaktiman", "thor", "nagraj"];

const myObj = {
name: "vindesh"

}
    



const myFunction = function() {
    console.log("hello world");
}


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "vindeshpawar"

let anothername = myYoutubename
anothername = "vindesh"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
     upi : "user@ybl"
}
    let userTwo = userOne
    userTwo.email = "vindesh@gmail.com"

    console.log(userOne.email);
    console.log(userTwo.email);
