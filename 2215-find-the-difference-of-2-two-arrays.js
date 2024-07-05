/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let res1 = [], res2 = []
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)

  for (const key of set1) {
    if(!set2.has(key)) res1.push(key)
  }
  for (const key of set2) {
    if(!set1.has(key)) res2.push(key)
  }

  return [res1, res2]
}

let testCases = [
  [[1, 2, 3], [2, 4, 6]],
  [[1, 2, 3, 3], [1, 1, 2, 2]]
]

testCases.forEach(t => console.log(findDifference(t[0], t[1])))