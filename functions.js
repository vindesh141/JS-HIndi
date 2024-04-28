







function myname(){
     console.log("v");
console.log("i");
console.log("n");
console.log("d");
console.log("e");
console.log("s");
console.log("h");
}


//myname

function addTwoNumbers(number1, number2){
   // let result = number1 + number2
    //return result
    return  number1 + number2
}

 const result = addTwoNumbers(6,6)
 //console.log("result", result);

 function loginUserMessage(username){
    if(username=== undefined){
console.log("enter your name");
return
    }
    return `${username} just log in `
 }
 //console.log(loginUserMessage("vindesh"));
//console.log(loginUserMessage())

function calculateCartprice(...num1){
    return num1

}
//console.log(calculateCartprice(333,667,898));

const user = {
    username: "vindesh",
price : 199
}

function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username:"sam",
    price:499
})

const myNewArray = [122,344,786,890,789]

function returnSecondValue(getArray){
return  getArray[3]
}
console.log(returnSecondValue(myNewArray));