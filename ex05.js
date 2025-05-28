// Exercise 5: Write a function named 'groupByCategory' that takes an array of product objects and returns an object where the keys are categories and the values are arrays of products in those categories.

function groupByCategory(products) {
  // your code here
  // let newArray = {}

  // for(let i=0; i<products.length; i++){
  //   if(products[i].name in newArray){
  //     newArray[products[i].name].push(products[i])
  //   }else{
  //     newArray[products[i].name].push(products[i])
  //   }
   
  // }

  // return newArray

  let groups = {}

  for (let i = 0; i < products.length; i++) {
    if (!groups[products[i].category]) {
      groups[products[i].category] = [] // create array
    }
    groups[products[i].category].push(products[i])
  }

  return groups
}


console.log(groupByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }, { name: 'Banana', category: 'Fruit' }])) // { Fruit: [{ name: 'Apple', category: 'Fruit' }, { name: 'Banana', category: 'Fruit' }], Vegetable: [{ name: 'Carrot', category: 'Vegetable' }] }

