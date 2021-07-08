import { TreeNode } from '../types'

/**
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 * @param root
 * @returns
 */
function diameterOfBinaryTree(root: TreeNode | null): number {
  const [diameter] = calc(root)
  return diameter
}

function calc(root: TreeNode | null) {
  if (!root) {
    return [0, -1]
  }
  const [leftDiameter, leftLongest] = calc(root.left)
  const [rightDiameter, rightLongest] = calc(root.right)
  const combineLRLongest = leftLongest + rightLongest + 2
  return [
    Math.max(leftDiameter, rightDiameter, combineLRLongest),
    Math.max(leftLongest, rightLongest) + 1,
  ]
}

/**
 * solution:
 * If two branches of a tree is almost the same weight,
 * then we can just find the longest path of the two branch and add them.
 * If not, the diameter will either be left diameter or right diameter.
 */
