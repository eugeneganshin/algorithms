// Kadanet's Algorithm
function maxSub(array) {
    let len = array.length
    let local_max = 0
    let global_max = 0

    for (let i = 0; i < array.length; i++) {
        local_max = Math.max(array[i], array[i] + local_max)
        if (local_max > global_max) {
            global_max = local_max
        }
    }

    return global_max
}

// console.log(maxSub([4,-1]))
console.log(maxSub([-2,1,-3,4,-1,2,1,-5,4]))
//      0, 1, 0, 4, 3