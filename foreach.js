const coding = ["js", "java", "py", "rb", "cpp"]

//coding.forEach(function (val) {

  //  console.log(val);
//})

// coding.forEach(  (key)  => {

 //   console.log(key);
 // })

// function printMe(item) {
 //   console.log(item);
// }

 // coding.forEach(printMe)

 // coding.forEach(  (item, index, arr) => {
   // console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName:"javascript",
     languageFileName: "js"
    },

    {
        languageName:"python",
        languageFileName:"py"
    },

    {
        languageName:"java",
        languageFileName:"java"
    },
]

myCoding.forEach(  (item) => {
console.log(item.languageName);
})