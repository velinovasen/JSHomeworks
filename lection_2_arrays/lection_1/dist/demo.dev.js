"use strict";

function checkDistance(array) {
  var firstResult = Math.sqrt(Math.pow(array[0] - array[1], 2) + Math.pow(0 - 0, 2)) % 1 === 0;
  var secondResult = Math.sqrt(Math.pow(array[2] - array[3], 2) + Math.pow(0 - 0, 2)) % 1 === 0;
  var thirdResult = Math.sqrt(Math.pow(array[0] - array[1], 2) + Math.pow(array[2] - array[3], 2)) % 1 === 0;

  if (firstResult === true) {
    console.log("{".concat(array[0], ", ").concat(array[1], "} to {0, 0} is valid"));
  } else {
    console.log("{".concat(array[0], ", ").concat(array[1], "} to {0, 0} is invalid"));
  }

  if (secondResult === true) {
    console.log("{".concat(array[2], ", ").concat(array[3], "} to {0, 0} is valid"));
  } else {
    console.log("{".concat(array[2], ", ").concat(array[3], "} to {0, 0} is invalid"));
  }

  if (thirdResult === true) {
    console.log("{".concat(array[0], ", ").concat(array[1], "} to {").concat(array[2], ", ").concat(array[3], "} is valid"));
  } else {
    console.log("{".concat(array[0], ", ").concat(array[1], "} to {").concat(array[2], ", ").concat(array[3], "} is invalid"));
  }
}

function checkDistance2(array) {
  if (array[1] === 0) {
    console.log("{".concat(array[0], ", ").concat(array[1], "} to {0, 0} is valid"));
  } else {
    console.log("{".concat(array[0], ", ").concat(array[1], "} to {0, 0} is invalid"));
  }

  if (array[3] === 0) {
    console.log("{".concat(array[2], ", ").concat(array[3], "} to {0, 0} is valid"));
  } else {
    console.log("{".concat(array[2], ", ").concat(array[3], "} to {0, 0} is invalid"));
  }

  if (array[1] === array[3]) {
    console.log("{".concat(array[0], ", ").concat(array[1], "} to {").concat(array[2], ", ").concat(array[3], "} is valid"));
  } else {
    console.log("{".concat(array[0], ", ").concat(array[1], "} to {").concat(array[2], ", ").concat(array[3], "} is invalid"));
  }
}

checkDistance2([2, 1, 1, 1]);