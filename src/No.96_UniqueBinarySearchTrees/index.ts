/**
 * Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
 * @param n
 */
function numTrees(n: number): number {
  const results = [1]
  for (let i = 1; i <= n; i++) {
    const remaining = i - 1
    let sum = 0
    for (let j = 0; j <= remaining; j++) {
      const l = j
      const r = remaining - l
      sum += results[l] * results[r]
    }
    results[i] = sum
  }
  return results[n]
}

/**
 * solution:
 * For n, we find all pairs [x, n - 1 - x], numTrees[n] = sum(numTrees[x] * numTrees[n - 1 - x])
 */
