import { TreeNode } from '../types'

/**
 * Given the root of a binary tree, flatten the tree into a "linked list":
 *    The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
 *    The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 * @param root
 */
function flatten(root: TreeNode | null): void {
  flattenInner(root)
}

function flattenInner(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  if (!root.left && !root.right) {
    return root
  }
  const flattenedLeft = flattenInner(root.left)
  const flattenedRight = flattenInner(root.right)
  root.left = null
  root.right = null
  let next = root
  if (flattenedLeft) {
    root.right = flattenedLeft
    next = root.right
  }
  while (next && next.right) {
    next = next.right
  }
  next.right = flattenedRight
  return root
}

/**
 * solution:
 * Think recursively (with side effects :-))
 */
