/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  if (nums.every(n => n === 1)) return nums.length - 1

  let max = 0
  let numZeros = 0

  for (let left = 0, right = 0; right < nums.length; right++) {
    if (nums[right] === 0) numZeros++
    while (numZeros > 1) {
      if (nums[left] === 0) numZeros--
      left++
    }
    max = Math.max(max, right - left + 1)
  }

  return max - 1
}

let testCases = [
  [1, 1, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1],
]

testCases.forEach(t => console.log(longestSubarray(t)))

