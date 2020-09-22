function addRemEls (array) {
  const resultArray = []
  for (let x = 1; x < array.length + 1; x++) {
    if (array[x - 1] === 'add') {
      resultArray.push(x)
    } else if (array[x - 1] === 'remove') {
      resultArray.pop()
    }
  }
  if (resultArray.length > 0) {
    console.log(resultArray.join('\n'))
  } else {
    console.log('Empty')
  }
}

addRemEls(['remove', 'remove', 'remove'])
