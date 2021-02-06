/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * @param root
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true
  }
  let queue: TreeNodeWithForm[] = [root]
  let newQueue: TreeNodeWithForm[] = []
  let queueLength = 1
  while (queue.length > 0 || newQueue.length > 0) {
    if (queue.length > 0) {
      const fromIndex = queueLength - queue.length
      const cur = queue.shift()
      if (cur.left) {
        newQueue.push({
          ...cur.left,
          fromIndex,
          fromType: 'l',
        })
      }
      if (cur.right) {
        newQueue.push({
          ...cur.right,
          fromIndex,
          fromType: 'r',
        })
      }
    } else {
      if (!validate(newQueue, queueLength)) {
        return false
      }
      queue = newQueue
      queueLength = newQueue.length
      newQueue = []
    }
  }
  return true
}

function validate(values: TreeNodeWithForm[], length: number) {
  let result = true
  let i = 0
  let j = values.length - 1
  while (i <= j) {
    const sameValue = values[i].val !== values[j].val
    const differentDir =
      values[i].fromType !== undefined &&
      values[i].fromType === values[j].fromType
    const matchedIndex =
      values[i].fromIndex !== undefined &&
      values[i].fromIndex + values[j].fromIndex !== length - 1
    if (sameValue || differentDir || matchedIndex) {
      result = false
      break
    }
    i++
    j--
  }
  return result
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

interface TreeNodeWithForm extends TreeNode {
  fromIndex?: number
  fromType?: 'l' | 'r'
}

/**
 * solution:
 * Validate whether each row is symmetric. You need to handle some corner cases.
 * It's difficult and complex to handle these cases.
 * Some other way is preferred. Recur as its definition?
 */
