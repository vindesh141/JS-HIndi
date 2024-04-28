const isUserloggedIn = true;

const temperature = 41;
if (temperature < 50) {
  //console.log("less than 50");
} else {
  //console.log("greater than 50");
}

//console.log("executed");

//const score = 200
//
//if (score > 100) {
//   const power = "fly"
//   console.log(`user power : ${power}`);
//}

//const balance = 1000

//if (balance > 500) console.log("test");

//if (balance < 344) {
// console.log('less than 344');

//} else if (balance <500) {
// console.log("less than 500");

//} else if (balance < 900) {
//console.log("less than 900");
//}

//else {
//  console.log("less than 1100");
//}

const UserLoggedIn = true;
const debitcard = true;
const UserLoggedInFromGoogel = false;
const UserLoggedInFromEmail = true;

if (UserLoggedIn && debitcard) {
  console.log("Allow to buy products");
}

if (UserLoggedInFromGoogel || UserLoggedInFromEmail) {
  console.log("Allow to buy products");
}
