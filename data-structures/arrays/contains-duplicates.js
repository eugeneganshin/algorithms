// O(n)
function findDuplicates(nums) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = true
        } else {
            return true
        }
    }

    return false
}


console.log(findDuplicates([0,4,5,3,1,6]))
