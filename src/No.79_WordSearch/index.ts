/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * Note: There will be some test cases with a board or a word larger than constraints to test if your solution is using pruning.
 * @param board
 * @param word
 */
function exist(board: string[][], word: string): boolean {
  const startChar = word[0]
  const m = board.length
  const n = board[0].length
  if (word.length > m * n) {
    return false
  }
  const records = []
  const possibleTargets = []
  for (let i = 0; i < m; i++) {
    records.push([])
    for (let j = 0; j < n; j++) {
      if (board[i][j] === startChar) {
        possibleTargets.push([i, j])
      }
    }
  }
  let reached = false
  function dfs(start: [number, number], str: string) {
    if (str === word) {
      reached = true
      return
    }
    if (str.length === word.length && str !== word) {
      return
    }
    const top = start[0] - 1
    const down = start[0] + 1
    const right = start[1] + 1
    const left = start[1] - 1
    const curChar = word[str.length]
    const topEq = top >= 0 && board[top][start[1]] === curChar
    const downEq = down < m && board[down][start[1]] === curChar
    const leftEq = left >= 0 && board[start[0]][left] === curChar
    const rightEq = right < n && board[start[0]][right] === curChar

    if (topEq && records[top][start[1]] === undefined) {
      records[top][start[1]] = 0
      dfs([top, start[1]], str + board[top][start[1]])
      records[top][start[1]] = undefined
    }
    if (reached) {
      return
    }
    if (downEq && records[down][start[1]] === undefined) {
      records[down][start[1]] = 0
      dfs([down, start[1]], str + board[down][start[1]])
      records[down][start[1]] = undefined
    }
    if (reached) {
      return
    }
    if (leftEq && records[start[0]][left] === undefined) {
      records[start[0]][left] = 0
      dfs([start[0], left], str + board[start[0]][left])
      records[start[0]][left] = undefined
    }
    if (reached) {
      return
    }
    if (rightEq && records[start[0]][right] === undefined) {
      records[start[0]][right] = 0
      dfs([start[0], right], str + board[start[0]][right])
      records[start[0]][right] = undefined
    }
    if (reached) {
      return
    }
  }

  for (const pair of possibleTargets) {
    records[pair[0]][pair[1]] = 0
    dfs(pair, board[pair[0]][pair[1]])
    records[pair[0]][pair[1]] = undefined

    if (reached) {
      return true
    }
  }
  return false
}

/**
 * solution:
 * Use a array to record visited points.
 * After each dfs, check whether reaches to pruning.
 */
