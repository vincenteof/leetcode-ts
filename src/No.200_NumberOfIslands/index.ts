/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
 * return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 */

type Pos = [number, number]

function numIslands(grid: string[][]): number {
  let num = 0
  const stack: Pos[] = []
  const m = grid.length
  const n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        stack.push([i, j])
        while (stack.length > 0) {
          const [y, x] = stack.pop()
          grid[y][x] = '0'
          if (y - 1 >= 0 && grid[y - 1][x] === '1') {
            stack.push([y - 1, x])
          }
          if (y + 1 < m && grid[y + 1][x] === '1') {
            stack.push([y + 1, x])
          }
          if (x - 1 >= 0 && grid[y][x - 1] === '1') {
            stack.push([y, x - 1])
          }
          if (x + 1 < n && grid[y][x + 1] === '1') {
            stack.push([y, x + 1])
          }
        }
        num++
      }
    }
  }
  return num
}

/**
 * solution:
 * Mark the position visited to avoid redundant work.
 * When all work starting from one work finishes, one island is found.
 */
