import { TreeNode } from '../types'

/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 * @param root
 */
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return []
  }

  const result: number[][] = [[root.val]]
  let queue = [root]
  let backQueue: TreeNode[] = []
  while (queue.length > 0 || backQueue.length > 0) {
    const cur = queue.shift()
    if (cur.left) {
      backQueue.push(cur.left)
    }
    if (cur.right) {
      backQueue.push(cur.right)
    }
    if (queue.length === 0) {
      if (backQueue.length > 0) {
        // todo: opt
        result.push(backQueue.map((x) => x.val))
      }
      let temp = queue
      queue = backQueue
      backQueue = temp
    }
  }
  return result
}

/**
 * solution:
 * BFS.
 */
