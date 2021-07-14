/**
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
 * ans[i] is the number of 1's in the binary representation of i.
 * @param n
 */

function countBits(n: number): number[] {
  if (n === 0) {
    return [0]
  }
  if (n === 1) {
    return [0, 1]
  }
  const result = [0, 1]
  for (let i = 1; i < 17; i++) {
    const start = Math.pow(2, i)
    const end = start * 2
    for (let j = start; j < end && j <= n; j++) {
      if (j % 2 === 1) {
        result[j] = result[j - 1] + 1
      } else {
        result[j] = result[j - start] + 1
      }
    }
  }
  return result
}

/**
 * solution:
 * The key is how to reuse previous computation.
 * And notice that `result[1xx] = result[xx] + 1`
 */
