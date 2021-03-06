/**
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 * @param grid
 */

function minPathSum(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const sum = []
  for (let i = 0; i < m; i++) {
    sum.push([])
  }
  function recur(curM: number, curN: number) {
    if (curM === m - 1 && curN === n - 1) {
      sum[curM][curN] = grid[curM][curN]
    }
    if (typeof sum[curM][curN] !== 'undefined') {
      return sum[curM][curN]
    }
    let sum1 = Number.MAX_SAFE_INTEGER
    if (curM + 1 < m) {
      sum1 = recur(curM + 1, curN)
    }
    let sum2 = Number.MAX_SAFE_INTEGER
    if (curN + 1 < n) {
      sum2 = recur(curM, curN + 1)
    }
    sum[curM][curN] = Math.min(sum1, sum2) + grid[curM][curN]
    return sum[curM][curN]
  }
  return recur(0, 0)
}

/**
 * solution:
 * Simple BFS solution has many duplicate computation.
 * Memorize previous result.
 */

// function minPathSum(grid: number[][]): number {
//   const m = grid.length
//   const n = grid[0].length
//   let min = Number.MAX_SAFE_INTEGER
//   const queue = [[m - 1, n - 1, grid[m - 1][n - 1]]]
//   while (queue.length > 0) {
//     const cur = queue.pop()
//     const [curM, curN, curSum] = cur
//     if (curSum > min) {
//       continue
//     }
//     if (curM === 0 && curN === 0 && curSum < min) {
//       min = curSum
//     }
//     if (curM - 1 >= 0) {
//       const newSum1 = curSum + grid[curM - 1][curN]
//       queue.push([curM - 1, curN, newSum1])
//     }
//     if (curN - 1 >= 0) {
//       const newSum2 = curSum + grid[curM][curN - 1]
//       queue.push([curM, curN - 1, newSum2])
//     }
//   }
//   return min
// }
