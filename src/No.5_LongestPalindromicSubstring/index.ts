/**
 * Given a string s, return the longest palindromic substring in s.
 * @param s
 */
function longestPalindrome(s: string): string {
  let longest = ''
  for (let i = 0; i < s.length; i++) {
    const [len1, start1, end1] = expand(i, i, s)
    const [len2, start2, end2] = expand(i, i + 1, s)
    if (len1 > longest.length) {
      longest = s.slice(start1, end1)
    }
    if (len2 > longest.length) {
      longest = s.slice(start2, end2)
    }
  }
  return longest
}

function expand(start1: number, start2: number, s: string) {
  let j = start1
  let k = start2
  while (j >= 0 && k < s.length && s[j] === s[k]) {
    j--
    k++
  }
  return [k - j - 1, j + 1, k]
}

/**
 * solution:
 * Iterate the mid of the longest palindrome.
 */
