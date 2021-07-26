// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    let strArray = str.split(" ")
    let result = []
    let tempWord = ""
    for (let char of strArray) {
        tempWord = char[0].toUpperCase() + char.slice(1)
        result.push(tempWord)
    }
    return result.join(" ")

}

module.exports = capitalize;
