// O(n*n)
function rotateArray(nums, k) {
  let temp;
  if (k === 0) {
    return nums;
  } else {
    temp = nums[0];
    nums[0] = nums[nums.length - 1];
    nums[nums.length - 1] = temp;
    return rotateArray(nums, k - 1);
  }
}

console.log(rotateArray([1, 2, 3, 4, 5], 1));
