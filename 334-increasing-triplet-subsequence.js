/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // for (let i = 0; i < nums.length - 2; i++) {
  //   let aux = nums.slice(i + 1)
  //   let areThereTwoGreaterAfter = 0
  //   let comp = nums[i]
  //   for (let j = 0; j < aux.length; j++) {
  //     if (aux[j] > comp) {
  //       comp = aux[j]
  //       areThereTwoGreaterAfter++
  //     }
  //   }
  // console.log({ aux, i, comp, numi: nums[i], areThereTwoGreaterAfter })
  // if (areThereTwoGreaterAfter >= 2) return true
  // }
  // return false
  let prev = Infinity
  let next = Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > next && next > prev) return true
    if (nums[i] > prev) {
      console.log(nums[i], prev, ' prev')
      next = nums[i]
    } else {
      console.log(nums[i], next, ' next')
      prev = nums[i]
    }
  }
  return false
};

// console.log(increasingTriplet([5, 4, 3, 2, 1]))
// console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))
// console.log(increasingTriplet([20, 100, 10, 12, 5, 13]))
// console.log(increasingTriplet([0, 4, 2, 1, 0, -1, -3]))
console.log(increasingTriplet([1, 5, 0, 4, 1, 3]))