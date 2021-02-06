/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * @param root
 */
function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  if (root.left === null && root.right === null) {
    return 1
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

/**
 * solution:
 * Recur as its definition.
 */
