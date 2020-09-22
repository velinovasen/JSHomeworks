function calorieObject ([...args]) {
  const calories = {}
  const keys = []
  const values = []
  for (let i = 0; i < args.length; i++) {
    if (i % 2 === 0) {
      keys.push(args[i])
    } else if (i % 2 !== 0) {
      values.push(args[i])
    }
  }
  for (let j = 0; j < keys.length; j++) {
    const key = keys[j]
    const value = parseInt(values[j])
    calories[key] = value
  }
  console.log(calories)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
