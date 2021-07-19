// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
let numString = n.toString(10)
let reverseString = numString.split("").reverse().join("")
let reverseNum = parseInt(reverseString,10)
reverseNum = (n < 0) ? reverseNum * -1 : reverseNum
return reverseNum
}

module.exports = reverseInt;
