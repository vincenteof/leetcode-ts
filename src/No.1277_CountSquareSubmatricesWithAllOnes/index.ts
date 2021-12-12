import { get } from '../utils'

/**
 * Given a m * n matrix of ones and zeros,
 * return how many square submatrices have all ones.
 * @param matrix
 */
function countSquares(matrix: number[][]): number {
  const dp = []
  matrix.forEach((_) => dp.push([]))
  let sum = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        dp[i][j] = 0
      } else {
        const left = get(dp, i, j - 1, 0)
        const leftTop = get(dp, i - 1, j - 1, 0)
        const top = get(dp, i - 1, j, 0)
        dp[i][j] = Math.min(left, leftTop, top) + 1
        sum += dp[i][j]
      }
    }
  }
  return sum
}

/**
 * the sum equals to all sub square num whose right-bottom is [i][j]
 */
