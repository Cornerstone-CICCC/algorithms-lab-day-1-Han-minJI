// Exercise 2: Write a function named 'filterByCategory' that takes an array of product objects and a category string, and returns a new array with products that belong to the given category.

function filterByCategory(products, category) {
  // your code here
  
  let newArray= []

  for(let i=0; i<products.length; i++){
    if(products[i].category === category){
    
      // add to the array
      newArray.push({ name: products[i].name, category: category})
    }
  }

  return newArray
  

}

console.log(filterByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }], 'Fruit')) // [{ name: 'Apple', category: 'Fruit' }]
