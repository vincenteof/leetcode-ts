/**
 * Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:
 *   Integers in each row are sorted in ascending from left to right.
 *   Integers in each column are sorted in ascending from top to bottom.
 * @param matrix
 * @param target
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length
  let n = matrix[0].length
  let x = 0
  let y = n - 1

  while (x < m && y >= 0) {
    const elem = matrix[x][y]
    if (elem > target) {
      y = y - 1
    } else if (elem < target) {
      x = x + 1
    } else {
      return true
    }
  }
  return false
}

/**
 * solution: 
 * The key is how to decrease the problem size.
 * We can use that each row or col is sorted.
 * I come across binary search with the closest value first time,
 * but it seems has many edge cases and i cannot pass all the test cases.
 */