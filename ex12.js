// Exercise 12: Write a function named 'filterAdults' that takes an array of user objects (each with an 'age' property) and returns a new array with only the users who are 18 or older.

function filterAdults(users) {
  // your code here
  let newArray = []
  for(let i=0; i<users.length; i++){
    if(users[i].age>=18){
      newArray.push({name: users[i].name, age: users[i].age})
    }
  }

  return newArray
}

console.log(filterAdults([{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }, { name: 'Jim', age: 17 }])) // [{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }]