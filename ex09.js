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

