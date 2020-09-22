function printNthEl (array) {
  const step = parseInt(array.pop())
  for (let x = 0; x < array.length; x += step) {
    console.log(array[x])
  }
}

printNthEl(['1', '2', '3', '4', '5', '6'])
