/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0) {
        left = nums[i]
        nums[i] = nums[j]
        nums[j] = left
      }
    }
  }
  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0]))
console.log(moveZeroes([0, 0, 1]))