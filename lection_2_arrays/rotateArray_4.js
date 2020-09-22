function rotateArr (array) {
  const times = parseInt(array.pop())
  for (let x = 0; x <= times % array.length; x++) {
    const lastEl = array.pop()
    array.shift(lastEl)
  }
  console.log(array.join(' '))
}

rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
