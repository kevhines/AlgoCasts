// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let reducedStringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    let reducedStringB = stringB.replace(/[^\w]/g, "").toLowerCase()
    // let result = true
    if (reducedStringA.length === reducedStringB.length) {
        let charHash = {}
       for (let char of reducedStringA) {
        charHash[char] = charHash[char] ? charHash[char] + 1 : 1
       }
       for (let char of reducedStringB) {
        if (charHash[char] > 0) {
            charHash[char] = charHash[char] - 1
        } else {
            return false
        }
       }
       return true

        // return true
    } else {
        return false
    }
  
}

module.exports = anagrams;
