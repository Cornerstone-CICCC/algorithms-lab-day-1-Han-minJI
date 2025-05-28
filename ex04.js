// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {

  let newArray ={}
  // your code here
  for(let i=0; i<arr.length; i++){
    if(!newArray[arr[i]]){
      newArray[arr[i]] = 1
    }else{
      newArray[arr[i]] ++
    }
    
  }

  return newArray
 
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }
