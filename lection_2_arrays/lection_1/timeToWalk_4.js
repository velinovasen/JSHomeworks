function uniWalk (steps, footprint, speed) {
  const speedMS = (speed * 5) / 18
  const distance = steps * footprint
  let totalTimeSec = 0
  const breaks = parseInt(distance / 500)
  if (breaks > 0) {
    totalTimeSec += 60 * breaks
  }
  totalTimeSec += distance / speedMS
  const hrs = Math.floor(totalTimeSec / 3600)
  const mins = Math.floor(totalTimeSec % 3600 / 60)
  const seconds = Math.ceil(totalTimeSec % 3600 % 60)
  let hrsDisplay
  let minsDisplay
  let secondsDisplay
  if (hrs < 10) {
    hrsDisplay = '0' + hrs
  } else {
    hrsDisplay = hrs
  }
  if (mins < 10) {
    minsDisplay = '0' + mins
  } else {
    minsDisplay = mins
  }
  if (seconds < 10) {
    secondsDisplay = '0' + seconds
  } else {
    secondsDisplay = seconds
  }
  console.log(hrsDisplay + ':' + minsDisplay + ':' + secondsDisplay)
}

uniWalk(2564, 0.70, 5.5)
