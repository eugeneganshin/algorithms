// A common approach when there are two arrays and the naive solution would be to use two nested loops
// is to use hash tables

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f', 'g']

// Naive
const findCommonNaive = (arr1,arr2) => {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true
            } else {
                return false
            }
        }
        
    }
}

// Hash table
const findCommon = (arr1, arr2) => {
    const common = {}
    let result = false
    // loop through first array and create hash table
    for (let i = 0; i < arr1.length; i++) {
        if (!common[arr1[i]]) {
            common[arr1[i]] = true
        }
    }

    // loop through second array and check if item in second array exists in created hash table
    for (let i = 0; i < arr2.length; i++) {
        if (common[arr2[i]]) {
            result = true
        }
    }

    return result
}

console.log(findCommon(array1, array2))