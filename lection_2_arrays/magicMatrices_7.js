function checkMatrix (matrix) {
  const mySet = new Set();
  matrix.forEach(element => {
    mySet.add(element.reduce((a, b) => a + b))
  })
  for (let x = 0; x < matrix.length; x++) {
    const tokenArr = []
    matrix.forEach(element => {
      tokenArr.push(element[x])
    })
    mySet.add(tokenArr.reduce((a, b) => a + b))
  }
  mySet.size === 1 ? console.log(true) : console.log(false)
}

checkMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]])
