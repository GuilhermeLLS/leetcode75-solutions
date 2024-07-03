/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let left = 0
  let right = nums.length - 1
  let ops = 0
  nums.sort((a, b) => a - b)
  
  while (left < right) {
    let sum = nums[left] + nums[right]
    if (sum === k) {
      left++
      right--
      ops++

    } else if (sum > k) {
      right--
    } else if (sum < k) {
      left++
    }
  }
  return ops
}

let testCases = [
  [[1, 2, 3, 4], 5],
  [[3, 1, 3, 4, 3], 6],
  [[3, 3, 1, 3, 4, 5, 3], 6],
  [[2, 2, 2, 3, 1, 1, 4, 1], 4]
]

testCases.forEach(t => console.log(maxOperations(t[0], t[1])))