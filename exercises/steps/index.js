// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let stairsNoSpace = ""
    let stairsWithSpace = ""
    for (let i=1;i <= n; i++) {
        stairsNoSpace = stairsNoSpace + "#"
        stairsWithSpace = stairsNoSpace
        for (let j=i+1; j <= n; j++) {
            stairsWithSpace = stairsWithSpace + " "
        }
        console.log(stairsWithSpace)
    }
}

module.exports = steps;
