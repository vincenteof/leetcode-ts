/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * @param strs
 */
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()
  for (const str of strs) {
    const sorted = str.split('').sort().join('')
    if (map.has(sorted)) {
      map.get(sorted).push(str)
    } else {
      map.set(sorted, [str])
    }
  }
  return [...map.values()]
}

/**
 * solution:
 * We cannot use hash because collision will happen.
 * Notice that all anagrams is the same after sorted.
 */
