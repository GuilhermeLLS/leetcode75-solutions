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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null
  let res = null
  let dfs = (node) => {
      if(!node) return null
      if (node.val === val) res = node
      node.left && dfs(node.left)
      node.right && dfs(node.right)
  }
  dfs(root)
  return res
};