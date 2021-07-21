import { TreeNode } from '../types'

function buildTree(preOrder: number[], inOrder: number[]): TreeNode | null {
  if (preOrder.length === 0 && inOrder.length === 0) {
    return null
  }

  if (preOrder.length === 1 && inOrder.length === 1) {
    return new TreeNode(preOrder[0])
  }

  const root = preOrder[0]
  const rootNode = new TreeNode(root)
  const count = inOrder.findIndex((x) => x === root)
  const leftBranchPreOrder = preOrder.slice(1, 1 + count)
  const leftBranchInOrder = inOrder.slice(0, count)
  const rightBranchPreOrder = preOrder.slice(1 + count, preOrder.length)
  const rightBranchInOrder = inOrder.slice(count + 1, inOrder.length)

  const leftNode = buildTree(leftBranchPreOrder, leftBranchInOrder)
  const rightNode = buildTree(rightBranchPreOrder, rightBranchInOrder)

  rootNode.left = leftNode
  rootNode.right = rightNode

  return rootNode
}

/**
 * solution:
 * From inoder, we can find the root.
 * We can use the root to find all left tree nodes count and right nodes count in preorder.
 * Use the counts, we can split inoder and preorder to 4 arrays.
 * Two are left branch inorder and preorder, and two are right branch inorder and preorder.
 * Here we reduce the problem size.
 * Similarly, We can also construct the tree from inorder and postorder.
 * Can we construct the tree from preorder and postorder?
 * It seems that the answer is not unique?
 */
