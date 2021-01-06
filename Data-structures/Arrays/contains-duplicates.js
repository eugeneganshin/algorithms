function findDuplicates(nums) {
    let hash = {}
    nums.forEach(el => {
        if (!hash[el]) {
            hash[el] = true
        } else {
            return true
        }
    });

    return false
}

console.log(findDuplicates([0,4,5,3,0,6]))


// nums.forEach(el => {
//     if (!hash[el]) {
//         hash[el] = true
//     } else {
//         return true
//     }
// });