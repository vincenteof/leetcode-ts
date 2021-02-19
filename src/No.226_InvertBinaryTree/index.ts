import { TreeNode } from '../types'

/**
 * Invert a binary tree.
 * @param root
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null
  }
  const leftInverted = invertTree(root.left)
  const rightInverted = invertTree(root.right)
  root.right = leftInverted
  root.left = rightInverted
  return root
}

/**
 * solution:
 * The problem definition is recursive itself.
 */
