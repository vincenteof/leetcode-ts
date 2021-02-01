/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *   1. Open brackets must be closed by the same type of brackets.
 *   2. Open brackets must be closed in the correct order.
 * @param s
 * @returns
 */
function isValid(s: string): boolean {
  const stack = []
  for (const x of s) {
    if (leftSyms.has(x)) {
      stack.push(x)
    } else {
      if (stack.length === 0) {
        return false
      }
      const matchable = stack.pop()
      if (leftSyms.get(matchable) !== x) {
        return false
      }
    }
  }
  return stack.length === 0
}
const leftSyms = new Map([
  ['(', ')'],
  ['{', '}'],
  ['[', ']'],
])

/**
 * solution:
 * how to verfify?
 */
