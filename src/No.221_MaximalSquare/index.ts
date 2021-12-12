import { get } from '../utils'
/**
 * Given an m x n binary matrix filled with 0's and 1's,
 * find the largest square containing only 1's and return its area.
 * @param matrix
 */
function maximalSquare(matrix: string[][]): number {
  const dp = []
  matrix.forEach(_ => dp.push([]))
  let max = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] ===  '0') {
        dp[i][j] = 0
      } else {
        const left = get(dp, i, j - 1, 0)
        const leftTop = get(dp, i - 1, j - 1, 0)
        const top = get(dp, i - 1, j, 0)
        dp[i][j] = Math.min(left, leftTop, top) + 1
        const area = dp[i][j] * dp[i][j]
        if (area > max) {
          max = area
        }
      }
    }
  }
  return max
}


/**
 * solution:
 * dp[i][j] here means the size of the max square whose right-bottom element is matrix[i][j].
 * And `dp[i][j] = Math.min(left, leftTop, top) + 1` (think about it)
 * When constructing dp, you cannot use `Array.from(matrix.length).fill([])`, or you will be fucked...
 */