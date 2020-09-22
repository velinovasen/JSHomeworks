function checkIfWins (matrix) {
  let win = false
  let winner
  for (let tok = 0; tok < matrix.length; tok++) {
    if ((matrix[tok][0] === 'X' && matrix[tok][1] === 'X' && matrix[tok][2] === 'X') || (matrix[tok][0] === 'O' && matrix[tok][1] === 'O' && matrix[tok][2] === 'O')) {
      win = true
      winner = matrix[tok][0]
      break
    }
    if ((matrix[0][tok] === 'X' && matrix[1][tok] === 'X' && matrix[2][tok] === 'X') || (matrix[0][tok] === 'O' && matrix[1][tok] === 'O' && matrix[2][tok] === 'O')) {
      win = true
      winner = matrix[0][tok]
      break
    }
  }
  if ((matrix[0][0] === 'X' && matrix[1][1] === 'X' && matrix[2][2] === 'X') || (matrix[0][0] === 'O' && matrix[1][1] === 'O' && matrix[2][2] === 'O')) {
    win = true
    winner = matrix[0][0]
  }
  if ((matrix[2][0] === 'X' && matrix[1][1] === 'X' && matrix[0][2] === 'X') || (matrix[2][0] === 'O' && matrix[1][1] === 'O' && matrix[0][2] === 'O')) {
    win = true
    winner = matrix[2][0]
  }
  return [win, winner]
}

function ticTacToe (input) {
  const matrix = [[false, false, false], [false, false, false], [false, false, false]]
  let player = 'X'
  for (let r = 0; r < input.length; r++) {
    const [row, col] = input[r].split(' ').map(num => Number(num))
    if (!matrix[row][col]) {
      matrix[row][col] = player
      player = player === 'X' ? 'O' : 'X'
    } else {
      console.log('This place is already taken. Please choose another!')
    }
    const token = matrix.join(' ')
    if (!token.includes('false')) {
      console.log('The game ended! Nobody wins :(')
      for (let row = 0; row < 3; row++) {
        console.log(matrix[row].join('\t'))
      }
      break
    }
    const [win, winner] = checkIfWins(matrix)
    if (win) {
      console.log(`Player ${winner} wins!`)
      for (let row = 0; row < 3; row++) {
        console.log(matrix[row].join('\t'))
      }
      break
    }
  }
}

ticTacToe(['0 1',
  '0 0',
  '0 2',
  '2 0',
  '1 0',
  '1 2',
  '1 1',
  '2 1',
  '2 2',
  '0 0'])

