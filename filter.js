// const coding = ["js", "java", "py", "rb", "cpp"]
// 
//     const values = coding.forEach( (item) => {
//  console.log(item);
//  return item
// })
// 
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 // const newNums = myNums.filter( (num) => {
 //   return num > 4
 // } )
//

 const newNums = []
 myNums.forEach( (num) => {
    if (num > 4) {
  newNums.push(num)        
    }
 })
  console.log(newNums);


  const books = [
  { title: 'Book One', genre: 'Maths', publish:'1928', edition:'2004'},
  { title: 'Book Two', genre: 'English', publish:'1948', edition:'2014'},
  { title: 'Book Three', genre: 'History', publish:'1938', edition:'2005'},
  { title: 'Book Four', genre: 'sceince', publish:'1958', edition:'2007'},
  { title: 'Book Five', genre: 'Maths', publish:'1927', edition:'2009'},
  ]

  const userBooks = books.filter( (bk) => bk.genre === 'Maths' )
  console.log(userBooks);
  
  
  

  