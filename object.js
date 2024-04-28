//const tinderUser = new Object()

const tinderUser = {}

tinderUser.Id = "123abd"
tinderUser.name = "tonny"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const newUser = {
    fullname:{
        userfullname:{
            firstname:"vindesh",
            secondname:"khapariye"
        }
    }
}

//console.log(newUser.fullname);

const obj1 = { 1: "a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign(   {}, obj1,obj2)
const obj3 = {...obj1,...obj2}
//console.log(obj3);

const user = [
    {
id:1,
email:"email@123"
    },
    {

    },
    {

    }
]
user[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename:"js in hindi",
    price:"999",
    courseinstructure:"hitesh",

}

const {courseinstructure} = course
console.log(courseinstructure);