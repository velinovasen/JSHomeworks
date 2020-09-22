function gcd (num1, num2) {
  let smallestNum;
  let gcdResult = 1;
  if (num1 <= num2) {
    smallestNum = num1
  } else {
    smallestNum = num2
  }
  for (let i = 2; i <= smallestNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcdResult = i
      break
    }
  }
  return console.log(gcdResult)
}

gcd(2154, 458)
