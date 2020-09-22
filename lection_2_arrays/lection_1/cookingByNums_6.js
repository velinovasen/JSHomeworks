function cookingNums ([num, ...arr]) {
  let result = num
  for (const el of arr) {
    if (el === 'chop') {
      result /= 2
      console.log(Math.floor(result))
    } else if (el === 'dice') {
      result = Math.sqrt(result)
      console.log(Math.floor(result))
    } else if (el === 'spice') {
      result += 1
      console.log(Math.floor(result))
    } else if (el === 'bake') {
      result *= 3
      console.log(Math.floor(result))
    } else if (el === 'fillet') {
      result *= 0.80
      console.log(result.toFixed(1))
    }
  }
}

cookingNums(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])
