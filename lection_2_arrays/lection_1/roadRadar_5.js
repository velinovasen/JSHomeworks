function roadRadar (arr) {
  const speed = arr[0]
  const limits = {
    residential: 20,
    city: 50,
    interstate: 90,
    motorway: 130
  }
  const limit = limits[arr[1]]
  if (speed - limit > 40) {
    console.log('reckless driving')
  } else if (speed - limit > 20) {
    console.log('excessive speeding')
  } else if (speed - limit > 0) {
    console.log('speeding')
  }
}

roadRadar([40, 'city'])
