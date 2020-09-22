function calc (fruit, grams, pricePerKilo) {
  const moneyNeeded = (grams / 1000) * pricePerKilo
  console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`)
};

calc('apple', 300, 2.90)
