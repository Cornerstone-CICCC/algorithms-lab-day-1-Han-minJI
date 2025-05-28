// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  // your code here
  let average = 0
  let total = 0

  for(let i=0; i<arr.length;i++){
    total += arr[i]
  }
  average = total/arr.length
  return average
}

console.log(calculateAverage([10, 20, 30, 40, 50])) // 30