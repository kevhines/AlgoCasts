// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let noSpace = ""
    let withSpace = ""
for (i=1;i <= n; i++) {
    noSpace = (i > 1) ? noSpace + "##" : "#"
    withSpace = noSpace
    for (j=1 + i; j <= n; j++) {
        withSpace = " " + withSpace + " "
    }
    console.log(withSpace)
}
}

module.exports = pyramid;
