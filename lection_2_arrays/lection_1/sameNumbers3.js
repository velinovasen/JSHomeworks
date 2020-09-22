function checkNum (num1) {
  const num = String(num1).slice(1)
  let lastEl = String(num1)[0]
  let isEqual = true
  let totalSum = parseInt(lastEl)
  for (const el of num) {
    if (el !== lastEl) {
      isEqual = false
      totalSum += parseInt(el)
    } else {
      lastEl = el
      totalSum += parseInt(el)
    }
  }
  console.log(isEqual)
  console.log(totalSum)
}

checkNum(1234)
