// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let reverseString = str.split("")
    // let newString = []
    // let stringIndex = reverseString.length
    // for (let i=0;i < stringIndex;i++) {
    //     newString.push(reverseString[stringIndex - 1 - i])
    // }
    
    // return newString.join("")

    let reverseString = str.split("")
    return reverseString.reverse().join("")

}

module.exports = reverse;
