
let a = 30

if(true){
let a = 10
const b = 20 
//console.log("INNER:",a);
}
//console.log(a);
//console.log(b);

//console.log(c);




function one(){
    const username = "vindesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);

    two()
}

//one()


if (true) {
    const username = "vindesh"

    if (username === "vindesh") {
        const website = " youtube"
       // console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);






//++++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1

}
//addone(5)

//console.log(addtwo(5));
const addtwo = function(num){
    return num + 2
}
//addtwo(5)