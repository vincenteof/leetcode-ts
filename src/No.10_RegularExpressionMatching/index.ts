/**
 * Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:
 *    '.' Matches any single character.​​​​
 *    '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 *
 * @param s
 * @param p
 */
function isMatch(s: string, p: string): boolean {
  const matching = []
  for (let i = 0; i <= s.length; i++) {
    matching[i] = []
  }
  matching[0][0] = true

  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j <= p.length; j++) {
      if (j === 0) {
        matching[i][j] = i === 0
      } else if (i === 0) {
        if (p[j - 1] === '*') {
          matching[i][j] = j === 1 ? true : matching[i][j - 2]
        } else {
          matching[i][j] = false
        }
      } else {
        if (p[j - 1] === '*') {
          matching[i][j] =
            (eq(s[i - 1], p[j - 2]) && matching[i - 1][j]) || matching[i][j - 2]
        } else {
          matching[i][j] = eq(s[i - 1], p[j - 1]) && matching[i - 1][j - 1]
        }
      }
    }
  }
  return matching[s.length][p.length]
}

function eq(s1: string, s2: string) {
  return s1 === s2 || s1 === '.' || s2 === '.'
}

/**
 * solution:
 * if there is no '*', it will be very simple. So the problem is how to deal with '*'.
 * We can compare `s` with `p` either from the beginning or the end.
 * If we start from the begin, we have to look forward one more char to recognize '*'.
 * So we start from the end.
 * When we come across '*', if we don't count, the result will be whether `s` matches `p.slice(p.length - 2, p.length)`.
 * If we count it, the straight way will have many branches.
 * We can reduce the problem to whether `s.slice(s.length - 1, s.length)` matches `p`, it is identical to handle with many branches.
 */
