// Exercise 1: Write a function named 'sumPrices' that takes an array of product objects (each with a 'price' property) and returns the total sum of all prices.

function sumPrices(products) {
  // your code here

  let totalSum = 0

  for(let i=0; i< products.length; i++)
  {
    totalSum += products[i].price
  }
  return totalSum
}

console.log(sumPrices([{ price: 10 }, { price: 20 }, { price: 30 }])) // 60
