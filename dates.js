//*****************Dates**************** */

let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);

let newCreatedDate = new Date( 2024, 1,12,5, 3,)
//console.log(newCreatedDate.toDateString());
//console.log(newCreatedDate.toLocaleDateString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getHours());
console.log(newDate.getFullYear());
console.log(newDate.getDate());

  newDate.toLocaleString('default',{
    weekday:"long",
  })