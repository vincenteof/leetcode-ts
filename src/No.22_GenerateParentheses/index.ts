/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * @param n
 */
interface ParenInfo {
  str: string
  stack: string[]
}

function generateParenthesis(n: number): string[] {
  const result = []
  const queue: ParenInfo[] = [{ str: '(', stack: ['('] }]
  while (queue.length > 0) {
    const cur = queue.pop()
    if (cur.str.length < n * 2) {
      if (cur.stack.length > 0) {
        const newStack = [...cur.stack]
        newStack.pop()
        queue.push({
          str: cur.str + ')',
          stack: newStack,
        })
      }
      queue.push({
        str: cur.str + '(',
        stack: [...cur.stack, '('],
      })
    } else if (cur.stack.length === 0) {
      result.push(cur.str)
    }
  }
  return result
}

/**
 * solution:
 * We have to place n * 2 parentheses, and we know the way to validate parentheses is using stack.
 * Just combine them together. Reason all possibilities and remove the invalid ones.
 * Seems that some branches can be pruned.
 */
