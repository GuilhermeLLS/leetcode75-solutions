/**
 * @description this must run in O(n) and can't use the divide operator
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = []
  let clone = nums.slice()
  for (let i = 0; i < clone.length; i++) {
    console.log({nums})
    nums.splice(i,1)
    console.log({nums, clone})
    let prod = nums.reduce((acc, curr) => acc*curr, 1)
    prod = prod === -0 ? 0 : prod
    // for (let j = 0; j < nums.length; j++) {
    //   if (j !== i) {
    //     prod *= nums[j]
    //     prod = prod === -0 ? 0 : prod
    //   }
    // }
    result.push(prod)
    nums = clone.slice()
  }
  return result
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))

// I DONT KNOW HOW TO DO THIS ONE