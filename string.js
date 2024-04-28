const name  = "vindesh"
const repoCount = 50

//console.log(name  + repoCount  +   "value");

console.log(` hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vindes-hhc')

console.log(gameName[0]);
console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(-8,5)

const newStringOne = '    vindesh    '
console.log(newStringOne)
console.log(newStringOne.trim());

console.log(gameName.split('-'));