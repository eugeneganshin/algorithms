// // Kadanet's Algorithm
function maxSub(nums) {
    // use math.max 
    // the trick is to find max of local_sub and local_sub + next iterator
    let local_sub = 0
    let global_sub = 0

    for (let i = 0; i < nums.length; i++) {
        local_sub = Math.max(nums[i], local_sub + nums[i])
        if (local_sub>global_sub) {
            global_sub = local_sub
        }
    }

    return global_sub
}

// console.log(maxSub([4,-1]))
console.log(maxSub([-2,1,-3,4,-1,2,1,-5,4]))
//      0, 1, 0, 4, 3