const user = {
    username: "vindesh",
    price: 999,

    welcomeMessage: function(){
      console.log(`${this.username}, welcome to website `);
      console.log(this);
    }
}


//user.welcomeMessage()
//
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

//function chai(){
//    let username = "vindesh"
//    console.log(this.username);
//}
//chai()

const chai = () => {
    let username = "vindesh"
    console.log(this);
}

//chai()


//const addtwo = (num1, num2) => {
//    return num1 + num2
//}

//const addtwo = (num1 , num2) => (num1 + num2)

const addtwo = (num1 , num2) => num1 + num2

console.log(addtwo(3,6));