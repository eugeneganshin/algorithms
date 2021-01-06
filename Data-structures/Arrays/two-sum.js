
// O(n^2)
function twoSum (nums, target) {
    let indexes = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            const sum = nums[i] + nums[j]
            if (sum === target && !indexes.length) {
                indexes = [i,j]
            }
            
        }
        
    }

    return indexes
}

// twoSum([2,5,5,11,10], 10)


// O(n^2) NOT GOOD ENOUGHT WITH JS METHODS
// FOR FASTER RESULTS USE SET AND CUSTOM METHOD OF ACCESSING .has() and accessing last item of the set
function twoSumFast(nums,target) {
    const comp = []

    for (const val of nums) {
        if (comp.find(el => el === val) !== comp[nums.length - 1]) return true
        comp.push(target - val)
    }

    return false
}

console.log(twoSumFast([2,5,5,2,11,10], 10))
