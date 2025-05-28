// Exercise 15: Write a function named 'countWords' that takes a string of text and returns the number of words in the string.

function countWords(text) {
  // your code here
  let stringNum = 0
  let words = text.split(' ')
  stringNum = words.length
  
  return stringNum
}

console.log(countWords('The quick brown fox jumps over the lazy dog')) // 9