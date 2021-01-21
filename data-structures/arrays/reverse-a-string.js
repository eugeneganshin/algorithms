
// js methods
function reverse(str) {
    const reversed = str.split('').reverse().join('')
    return reversed
}

console.log(reverse('abc'), 'js methods')

function reverseCustom(str) {
    let temp = []

    for (let i = str.length - 1; i >= 0 ; i--) {
        temp.push(str[i])
    }

    return temp.join('')
}
console.log(reverseCustom('abc abc K'), ' custom')

// es6
const reverseEs6 = str => [...str].reverse().join('')
