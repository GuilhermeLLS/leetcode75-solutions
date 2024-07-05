/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let rightSum = nums.reduce((acc, curr) => acc + curr, 0)

  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i]
    if (rightSum === leftSum) return i
    leftSum += nums[i]
  }
  return -1
}

let testCases = [
  [1, 7, 3, 6, 5, 6],
  [1, 2, 3],
  [2, 1, -1],
]

testCases.forEach(t => console.log(pivotIndex(t)))