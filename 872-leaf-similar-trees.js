/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  // get all leaves from 1 and 2 using recursion
  let getAllLeaves = (root, arr) => {
      if (!root) return null

      if (!root.left && !root.right) {
          arr.push(root.val)
          return
      }

      if (root.left) getAllLeaves(root.left, arr)
      if (root.right) getAllLeaves(root.right, arr)
  }

  let rootOneLeaves = [], rootTwoLeaves = []
  getAllLeaves(root1, rootOneLeaves)
  getAllLeaves(root2, rootTwoLeaves)
  // compare arrays

  if (rootOneLeaves.length !== rootTwoLeaves.length) return false
  for (let i = 0; i < rootOneLeaves.length; i++) {
      if (rootOneLeaves[i] !== rootTwoLeaves[i]) return false
  }

  return true
};