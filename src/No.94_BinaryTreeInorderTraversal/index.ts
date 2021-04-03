import { TreeNode } from '../types'
/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * @param root
 */
function inorderTraversal(root: TreeNode | null): number[] {
  const result = []
  const stack = []
  let p = root
  while (stack.length > 0 || p !== null) {
    if (p) {
      stack.push(p)
      p = p.left
    } else {
      p = stack.pop()
      result.push(p.val)
      p = p.right
    }
  }
  return result
}

// function inorderTraversal(root: TreeNode | null): number[] {
//   const result = []
//   function recur(cRoot: TreeNode | null) {
//     if (cRoot === null) {
//       return
//     }
//     if (cRoot.left) {
//       recur(cRoot.left)
//     }
//     result.push(cRoot.val)
//     if (cRoot.right) {
//       recur(cRoot.right)
//     }
//   }
//   recur(root)
//   return result
// }

/**
 * solution:
 * We use a global variable to store.
 * We do a small work once an iteration in a non-recursive solution.
 */
