/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  let q = [root]
  let max = -Infinity
  let maxLevel = 1, level = 1
  while (q.length !== 0) {
      let sum = 0
      let size = q.length
      for (let i = 0; i < size; i++) {
          let node = q.shift()
          sum += node.val
          if (node.left) q.push(node.left)
          if (node.right) q.push(node.right)
      }
      if (sum > max) {
          maxLevel = level
          max = sum
      }
      level++
  }
  return maxLevel
};