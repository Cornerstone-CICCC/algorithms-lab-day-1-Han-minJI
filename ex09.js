// Exercise 9: Write a function named 'flattenArray' that takes an array of nested arrays and returns a single flattened array.

function flattenArray(arr) {
  // your code here
  let newArray = []
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length;j++){
      if(arr[i][j].length>1){
        for(let k=0; k<arr[i][j].length; k++){
          newArray.push(arr[i][j][k])
        }
      }else{
        newArray.push(arr[i][j])
      }

      
    }

  }
  return newArray
}

console.log(flattenArray([[1, 2], [3, 4], [5, [6, 7]]])) // [1, 2, 3, 4, 5, 6, 7]

// let testArray = [[1, 2], [1, [2,3]]]
// let newArray = []
// for(let i=0; i< testArray.length;i++){

//   for(let j=0; j<testArray[i].length;j++){
//       if(testArray[i][j].length>1){
//         for(let k=0; k<testArray[i][j]; k++){
//           newArray.push(testArray[i][j][k])
//         }
//       }else{
//         newArray.push(testArray[i][j])
//       }
      
//     }
// }

// console.log(testArray)