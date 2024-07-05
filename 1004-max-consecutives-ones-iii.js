/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let max = 0
  let numZeros = 0

  for (let left = 0, right = 0; right < nums.length; right++) {
    if (nums[right] === 0) numZeros++
    while (numZeros > k) {
      if (nums[left] === 0) numZeros--
      left++
    }
    max = Math.max(max, right - left + 1)
  }

  return max
}

let testCases = [
  [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2],
]

testCases.forEach(t => console.log(longestOnes(t[0], t[1])))

