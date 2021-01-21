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

// 0 1 0 5 12
function move(nums) {
	// use swap
	let temp
	let left = 0
	let right = 0

	while (right < nums.length) {
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

	console.log(nums)
	return nums
}

move([0,1,0,3,12])

