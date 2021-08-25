import { TreeNode } from '../types'

/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const pPath = findWithPath(root, p)
  const qPath = findWithPath(root, q)
  let i = 0
  for (; i < pPath.length && i < qPath.length; i++) {
    if (pPath[i] !== qPath[i]) {
      break
    }
  }
  return i > 0 ? pPath[i - 1] : null
}

function findWithPath(
  root: TreeNode | null,
  target: TreeNode | null
): TreeNode[] {
  if (root === null) {
    return []
  }
  if (root === target) {
    return [target]
  }

  const lPath = findWithPath(root.left, target)
  if (lPath.length > 0) {
    return [root, ...lPath]
  }
  const rPath = findWithPath(root.right, target)
  if (rPath.length > 0) {
    return [root, ...rPath]
  }

  return []
}

/**
 * solution:
 * We find 2 paths, then we compare them.
 * But this solution is too slow.
 */