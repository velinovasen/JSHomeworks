function orderBy (array) {
  array.sort((a, b) => a.length - b.length || a.localeCompare(b))
  console.log(array.join('\n'))
}

orderBy(['test', 'Deny', 'omen', 'Default'])
