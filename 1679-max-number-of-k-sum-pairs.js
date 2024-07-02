/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let left = 0
  let right = nums.length - 1
  let ops = 0
  while (left < right) {
    let sum = nums[left] + nums[right]
    // console.log({ sum, left, right })
    if (sum === k) {
      // remove left and right elements from the array
      nums.splice(left, 1)
      nums.splice(right - 1, 1)
      // console.log({ nums })
      left = 0
      right = nums.length - 1
      ops++

    } else if (sum > k) {
      // console.log('greater')
      nums[left] > nums[right] ? left++ : right--
    } else if (sum < k) {
      // console.log('smaller')
      nums[left] < nums[right] ? left++ : right--
    }
  }
  return ops
}

let testCases = [
  [[1, 2, 3, 4], 5],
  [[3, 1, 3, 4, 3], 6],
  [[3, 3, 1, 3, 4, 5, 3], 6],
  // [[2, 2, 2, 3, 1, 1, 4, 1], 4]
]

testCases.forEach(t => console.log(maxOperations(t[0], t[1])))