/**
 * Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
 * You have the following three operations permitted on a word:
 *      Insert a character
 *      Delete a character
 *      Replace a character
 */

function minDistance(word1: string, word2: string): number {
    const dp = Array(word1.length + 1)
      .fill(0)
      .map((_, index) => {
        const row = Array(word2.length + 1).fill(0)
        row[0] = index
        return row
      })
    for (let i = 1; i < word2.length + 1; i++) {
      dp[0][i] = i
    }
    console.log(dp)
    for (let i = 1; i < word1.length + 1; i++) {
      for (let j = 1; j < word2.length + 1; j++) {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          word1[i-1] === word2[j-1] ? dp[i - 1][j - 1]: dp[i - 1][j - 1] + 1
        )
      }
    }
    return dp[word1.length][word2.length]
  }

// horse ros
// h ro
// [[0, 1, 2, 3], [1, 1], [2], [3], [4], [5]]
