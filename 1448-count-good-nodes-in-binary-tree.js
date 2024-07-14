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
var goodNodes = function(root) {
    
  let checkNodes = (root, max) => {
      if(!root) return

      if(max <= root.val) {
          good++
          max = root.val
      }

      checkNodes(root.left, max)
      checkNodes(root.right, max)
  }
  let good = 0
  checkNodes(root, root.val)
  return good
}