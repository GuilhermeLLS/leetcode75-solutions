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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let sumsMap = new Map()
  let search = (node, currentSum) => {
      if(!node) return null
      currentSum += node.val

      let pathCount = sumsMap.get(currentSum - targetSum) || 0

      sumsMap.set(currentSum, (sumsMap.get(currentSum) || 0) + 1)

      pathCount += search(node.left, currentSum)
      pathCount += search(node.right, currentSum)

      sumsMap.set(currentSum, (sumsMap.get(currentSum) || 0) - 1)

      return pathCount
  }
  sumsMap.set(0, 1)

  return search(root, 0)
} 