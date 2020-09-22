function extractIncr (array) {
  const resultArray = []
  let currBiggestNum = Number.MIN_SAFE_INTEGER
  for (const el of array) {
    if (el >= currBiggestNum) {
      resultArray.push(el)
      currBiggestNum = el
    }
  }
  console.log(resultArray.join('\n'))
}

extractIncr([1, 3, 8, 4, 10, 12, 3, 2, 24])
