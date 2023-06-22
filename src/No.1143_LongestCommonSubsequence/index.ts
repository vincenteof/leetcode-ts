/**
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 * For example, "ace" is a subsequence of "abcde".
 * A common subsequence of two strings is a subsequence that is common to both strings.
 */

function longestCommonSubsequence(text1: string, text2: string): number {
  if (text1.length === 0 || text2.length === 0) {
    return 0;
  }
  const dp = Array(text1.length + 1)
    .fill(0)
    .map(() => Array(text2.length + 1).fill(0));
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[text1.length][text2.length];
}

// abcde ace
// [
//   [0, 0, 0, 0],
//   [0, 1, 1, 1],
//   [0, 1, 1, 1],
//   [0, 1, 2, 2],
//   [0, 2, 2, 2],
//   [0, 2, 2, 3],
// ];
