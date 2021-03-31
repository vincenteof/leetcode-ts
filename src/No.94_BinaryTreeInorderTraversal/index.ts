import { TreeNode } from '../types'
/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * @param root
 */
function inorderTraversal(root: TreeNode | null): number[] {
  const result = []
  function recur(cRoot: TreeNode | null) {
    if (cRoot === null) {
      return
    }
    if (cRoot.left) {
      recur(cRoot.left)
    }
    result.push(cRoot.val)
    if (cRoot.right) {
      recur(cRoot.right)
    }
  }
  recur(root)
  return result
}

/**
 * solution:
 * We use a global variable to store.
 */
