// Exercise 14: Write a function named 'mergeArrays' that takes two arrays and returns a new array that combines the elements of both arrays, alternating between them.

function mergeArrays(arr1, arr2) {
  // your code here
  let newArray = []

  for(let i=0; i<arr1.length + arr2.length; i++){
    if(i % 2 === 0){
      newArray[i] = arr1[parseInt(i/2)]
    }else if(i % 2 === 1){
      newArray[i] = arr2[parseInt(i/2)]
    }

  }
  
  return newArray

  
  
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]