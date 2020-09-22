function parseMatrix (inputMatrix) {
  let matrix = [];
  inputMatrix.forEach(line => {
    elements = []
    tokens = line.split(' ').forEach(num => elements.push(Number(num)))
    matrix.push(elements)
  })
  return matrix
}

function diagonalAttack (inputMatrix) {
  let matrix = parseMatrix(inputMatrix);
  let firstDiagonal = [];
  let secondDiagonal = [];
  for (let row = 0; row < matrix.length; row++) {
    firstDiagonal.push(matrix[row][row])
  }
  let colToken = 0
  for (let row = matrix.length - 1; row > -1; row--) {
    secondDiagonal.push(matrix[colToken][row])
    colToken += 1
  }
  sumFirstDiagonal = firstDiagonal.reduce((a, b) => a + b, 0);
  sumSecondDiagonal = secondDiagonal.reduce((a, b) => a + b, 0);
  if (sumFirstDiagonal === sumSecondDiagonal) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix.length; col++) {
        matrix[row][col] = sumFirstDiagonal
      }
    }
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][row] = firstDiagonal[row]
    }
    colToken = 0
    for (let row = matrix.length - 1; row > -1; row--) {
      matrix[colToken][row] = secondDiagonal.shift()
      colToken += 1
    }
  }
  for (let row = 0; row < matrix.length; row++) {
  console.log(matrix[row].join(' '))
}
}


diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0'])

// for (let row = 0; row < matrix.length; row++) {
//   console.log(matrix[row].join(' '))
// }