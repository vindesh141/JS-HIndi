const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`  acc: ${acc} and currval: ${currval}`);
// return acc + currval
// }, 3)

const myTotal = myNums.reduce( (acc, currval) => acc + currval ,0)

console.log(myTotal);

const shopingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName:"py course",
          price: 3999
    },
    {
        itemName:"mobile course",
        price: 1999
    },  
    {
        itemName:"data sceince",
        price: 4999
    },

]

  const priceToPay = shopingCart.reduce( (acc, item) => acc + item.price , 0)

  console.log(priceToPay);