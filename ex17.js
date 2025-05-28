// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

function mostFrequent(arr) {
  // your code here
  let mostFre = ''
  let newArray = {}
  
  for(let i=0; i<arr.length; i++){
    if(arr[i] in newArray){
      newArray[arr[i]] ++
    }else{
      newArray[arr[i]] = 1
    }
    


  }

  return newArray


}

console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])) // 'apple'

