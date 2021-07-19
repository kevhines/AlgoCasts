// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charHash = {}
    let highest = 0
    let index = ""
    for (let char of str) {
        charHash[char] = charHash[char] ? charHash[char] + 1 : 1
        if (charHash[char] > highest) {
            highest = charHash[char]
            index = char
        }
    }

    // for (const [k,v] of Object.entries(charHash)) {
    //     if (v > highest) {
    //         highest = v
    //         index = k
    //     }
    // }
    
    return index
}

module.exports = maxChar;
