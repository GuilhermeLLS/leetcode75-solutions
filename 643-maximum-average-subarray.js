/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let left = 0
  let right = 0
  let window = 0
  let max = -Infinity
  while (right < k) {
    window += nums[right]
    right++
  }
  max = window / k

  while (left + k < nums.length) {
    window = (window - nums[left] + nums[right]) 
    max = Math.max(window / k, max)
    left++
    right++
  }
  return max
};

let testCases = [
  [[1, 12, -5, -6, 50, 3], 4],
  [[5], 1],
  [[7, 4, 5, 8, 8, 3, 9, 8, 7, 6], 7]
]

testCases.forEach(t => console.log(findMaxAverage(t[0], t[1])))