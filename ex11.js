// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
  // your code here
  const words = text.split(' ')
  const reverseWords= words.reverse()
  const completeWord = reverseWords.join(' ')
  return completeWord
}

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'