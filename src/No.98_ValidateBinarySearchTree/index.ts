import { TreeNode } from '../types'

/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 *   The left subtree of a node contains only nodes with keys less than the node's key.
 *   The right subtree of a node contains only nodes with keys greater than the node's key.
 *   Both the left and right subtrees must also be binary search trees.
 * @param root
 */
function isValidBST(root: TreeNode | null): boolean {
  const { validated } = validate(root)
  return validated
}

type Result = {
  validated: boolean
  min?: number
  max?: number
}

function validate(root: TreeNode | null): Result {
  if (root === null) {
    return {
      validated: true,
    }
  }
  const leftResult = validate(root.left)
  const rightResult = validate(root.right)

  if (
    leftResult.validated &&
    rightResult.validated &&
    lessThan(leftResult.max, root.val) &&
    greaterThan(rightResult.min, root.val)
  ) {
    return {
      validated: true,
      min: typeof leftResult.min === 'undefined' ? root.val : leftResult.min,
      max: typeof rightResult.max === 'undefined' ? root.val : rightResult.max,
    }
  }

  return {
    validated: false,
  }
}

function lessThan(num: number | undefined, val: number) {
  if (typeof num === 'undefined') {
    return true
  }
  return num < val
}

function greaterThan(num: number | undefined, val: number) {
  if (typeof num === 'undefined') {
    return true
  }
  return num > val
}

/**
 * solution:
 * At any node, we must validate its left branch and right branch.
 * So we must have traversed the whole subtree at some time, thus we can have its max and min.
 */
