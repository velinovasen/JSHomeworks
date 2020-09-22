function validityChecker ([x1, y1, x2, y2]) {
  const dist1 = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2)
  const dist2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2)
  const dist3 = Math.sqrt((x1 - y1) ** 2 + (x2 - y2) ** 2)
  if (Number.isInteger(dist1)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
  }
  if (Number.isInteger(dist2)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
  }
  if (Number.isInteger(dist3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
  }
}

validityChecker([2, 1, 1, 1])
