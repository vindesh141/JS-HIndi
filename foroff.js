//For of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
  //console.log(`char is ${greet}`);    
}

// Map 

const map = new Map()
 map.set('IN', "INDIA")
 map.set('FR', "France")
 map.set('USA', "United States Of America")

 //console.log(map);

 for (const [key,Value] of map) {
    console.log(key, ':-', Value);
 }