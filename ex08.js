// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  // your code here
  let splitText = text.split(' ')
  let longest =splitText[0]
  for(let i=0; i<splitText.length; i++){
    if(longest.length < splitText[i].length){
      longest = splitText[i]
    }
  }

  return longest
}

console.log(longestWord('The duck loves bananas and grapes')) // 'bananas'
