/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time.
 * The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 * @param m
 * @param n
 */
function uniquePaths(m: number, n: number): number {
  const counts: number[][] = []
  for (let i = 0; i < m; i++) {
    counts.push([])
  }
  counts[m - 1][n - 1] = 1
  function dfs(innerM: number, innerN: number) {
    if (typeof counts[innerM][innerN] !== 'undefined') {
      return counts[innerM][innerN]
    }
    counts[innerM][innerN] = 0
    if (innerM + 1 < m) {
      counts[innerM][innerN] += dfs(innerM + 1, innerN)
    }
    if (innerN + 1 < n) {
      counts[innerM][innerN] += dfs(innerM, innerN + 1)
    }
    return counts[innerM][innerN]
  }
  return dfs(0, 0)
}

/**
 * solution:
 * If we start at some point (m, n), the unquie paths contain paths from (m + 1, n) and (m, n + 1)
 * Can we use an iteration solution to save more memory?
 */
