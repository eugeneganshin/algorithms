const nums = [0,1,0,3,12]

function moveZeroes(nums) {
    
    let left = 0
    let right = 0
    let temp
    const len = nums.length

    while (right < len) {
        if (nums[right] === 0) {
            right++
        } else {
            temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right++
        }
    }
};

moveZeroes(nums)

console.log(nums)