/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let result = -1

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left)
    console.log({ area, left, right, width: right - left, elLeft: height[left], elRight: height[right], })
    if (result < area) {
      result = area
    }
    if (height[left] <= height[right]) {
      left++
    } else {
      right--
    }
  }
  return result
}

let testCases = [
  [1, 1],
  [1, 8, 6, 2, 5, 4, 8, 3, 7],
  [2, 3, 4, 5, 18, 17, 6]
]
testCases.forEach((testCase) => console.log(maxArea(testCase)))