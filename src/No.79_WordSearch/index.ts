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
  const possibleTargets = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === startChar) {
        possibleTargets.push([i, j])
      }
    }
  }
  let reached = false
  function dfs(
    start: [number, number],
    str: string,
    paths: Array<[number, number]>
  ) {
    if (str === word) {
      reached = true
      return
    }
    const top = start[0] - 1
    const down = start[0] + 1
    const right = start[1] + 1
    const left = start[1] - 1
    if (top >= 0 && !contains(paths, [top, start[1]])) {
      dfs([top, start[1]], str + board[top][start[1]], [
        ...paths,
        [top, start[1]],
      ])
    }
    if (down < m && !contains(paths, [down, start[1]])) {
      dfs([down, start[1]], str + board[down][start[1]], [
        ...paths,
        [down, start[1]],
      ])
    }
    if (left >= 0 && !contains(paths, [start[0], left])) {
      dfs([start[0], left], str + board[start[0]][left], [
        ...paths,
        [start[0], left],
      ])
    }
    if (right < n && !contains(paths, [start[0], right])) {
      dfs([start[0], right], str + board[start[0]][right], [
        ...paths,
        [start[0], right],
      ])
    }
  }
  function contains(arr: Array<[number, number]>, target: [number, number]) {
    for (const elem of arr) {
      if (elem[0] === target[0] && elem[1] === target[1]) {
        return true
      }
    }
    return false
  }
  for (const pair of possibleTargets) {
    dfs(pair, board[pair[0]][pair[1]], [pair])
    if (reached) {
      return true
    }
  }
  return false
}
