const UserEmail = []

if (UserEmail) {
    console.log("Got the user email");
} else {
    console.log("Don't have user email");
}

// Falsy Value 

//false , 0 , -0, BigInt 0n, null, undefined, "", NaN

// Truthy Value 
// "0", "false", " ", [], {}, function(){}

if (UserEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

 // Nullish Coalescing operators (??): Null, Undefined

 let val1;
 //val1 = 5 ?? 10
//val1 =  null ?? 10
//val1 = undefined ??12
val1 = null ?? 10 ?? 20

console.log(val1);

//Terniary Operator 

const IceTeaPrice = 100

IceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");;



