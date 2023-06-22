/**
 * Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses  substring.
 */

function longestValidParentheses(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  const dp = [0];
  let longest = 0
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") {
      dp[i] = 0;
    } else {
      let a = i;
      while (a > 0) {
        if (s[a] === "(") {
          break;
        }
        const b = a - dp[a - 1] - 1;
        if (b < 0 || s[b] === ")") {
          break;
        }
        a = b - 1;
      }
      dp[i] = i - a;
      if (dp[i] > longest) {
        longest = dp[i]
      }
    }
  }
  return longest
}

// (()
// 0
// 00

// )()())
// 00
// 00204
