// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').


// uncompleted
function formatDate(dateStr) {

  // your code here
  const date = dateStr.split('-')
  const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const month = parseInt(date[1])-1
  const day = parseInt(date[2])
  
  return `${months[month]} ${day}, ${date[0]}`
  

}

console.log(formatDate('2022-01-01')) // 'January 1, 2022'