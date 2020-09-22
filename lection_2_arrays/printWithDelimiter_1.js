function printWith (array) {
  const delimeter = array.pop()
  const result = array.join(delimeter)
  console.log(result)
}

printWith(['One', 'Two', 'Three', 'Four', 'Five', '-'])
