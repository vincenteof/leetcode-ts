/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param s
 */
function lengthOfLongestSubstring(s: string): number {
  const strs = new Set<string>()
  let max = 0
  let i = 0
  let j = 0
  while (i < s.length && j < s.length) {
    if (strs.has(s[j])) {
      strs.delete(s[i])
      i++
    } else {
      strs.add(s[j])
      const len = j - i + 1
      if (len > max) {
        max = len
      }
      j++
    }
  }
  return max
}

/**
 * solution:
 * Once we find one repeating character, We must skip the previous one.
 * Otherwise, all the string starting before the previous one will have a smaller length.
 */
