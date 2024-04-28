// Objects Literals


const sym = Symbol("key1")

const JsUser = {
    name:"vindesh",
    "full name":"vindesh khapariye",
    [sym]:"key1",
    age:20,
    city:"Bhopal",
    email:"vindesh@googel.com",
    isLoggedIn:"false",
    lastLogInDays:["monday","saturday"]
}
    console.log(JsUser.email);
    console.log(JsUser["email"]);
    console.log(JsUser["full name"]);
    console.log(JsUser[sym]);
    JsUser.email = "vindesh@chatgpt"
    //Object.freeze(JsUser)
JsUser.email = "vindesh@googel"    
console.log(JsUser);

 JsUser.greeting = function(){
    console.log("Hello JS User");

 }
 JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
 }
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());

