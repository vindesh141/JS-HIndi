const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["superman","flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3] [1])

const newheros = marvel_heros.concat(dc_heros)
//console.log(newheros);


const mynewhero = [...marvel_heros,...dc_heros]
//console.log(mynewhero);


const Arr = [1,2,3,[4,5,],6,7,[4,5,[2,3]]]

const newArr = Arr.flat(Infinity)
console.log(newArr);

console.log(Array.isArray("vindesh"))
console.log(Array.from("vindesh"));


let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1,score2,score3));



let run1 = 45
let run2 = 67
let run3 = 90
let run4 = 104

console.log(Array.of(run1,run2,run3,run4));

