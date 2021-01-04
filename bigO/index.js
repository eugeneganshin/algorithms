function boo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('boo')
    }
}

boo([1,2,3,4,5]) 
// TIME: O(n)
// SPACE: O(1)

function arrayOfInTimes(n) {
    let hiArray = []
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi'
    }

    return hiArray
}
arrayOfInTimes(6)
// TIME: O(n)
// SPACE: O(n)
