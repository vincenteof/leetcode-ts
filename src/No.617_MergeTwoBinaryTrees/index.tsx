import { TreeNode } from '../types'

/**
 * You are given two binary trees root1 and root2.
 * Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
 * You need to merge the two trees into a new binary tree.
 * The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
 * Otherwise, the NOT null node will be used as the node of the new tree.
 * Return the merged tree.
 * Note: The merging process must start from the root nodes of both trees.
 * @param root1
 * @param root2
 * @returns
 */
function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null && root2 === null) {
    return null
  }
  if (root1 === null || root2 === null) {
    return root1 || root2
  }
  const newRoot = new TreeNode(root1.val + root2.val)
  const leftBranch = mergeTrees(root1.left, root2.left)
  const rightBranch = mergeTrees(root1.right, root2.right)
  newRoot.left = leftBranch
  newRoot.right = rightBranch
  return newRoot
}

/**
 * solution:
 * Make the problem smaller.
 */
