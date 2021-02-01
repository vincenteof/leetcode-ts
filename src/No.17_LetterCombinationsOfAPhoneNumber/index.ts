/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * Return the answer in any order.
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * Note that 1 does not map to any letters.
 * @param digits
 */
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return []
  }
  const curLetter = digits[0]
  const restDigits = digits.slice(1, digits.length)
  const restCombinations = letterCombinations(restDigits)
  if (mapping.has(curLetter)) {
    const letters = mapping.get(curLetter)
    if (restCombinations.length === 0) {
      return mapping.get(curLetter)
    }
    const newCombinations = []
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < restCombinations.length; j++) {
        newCombinations.push(letters[i] + restCombinations[j])
      }
    }
    return newCombinations
  }
  return restCombinations
}

const mapping = new Map([
  ['2', ['a', 'b', 'c']],
  ['3', ['d', 'e', 'f']],
  ['4', ['g', 'h', 'i']],
  ['5', ['j', 'k', 'l']],
  ['6', ['m', 'n', 'o']],
  ['7', ['p', 'q', 'r', 's']],
  ['8', ['t', 'u', 'v']],
  ['9', ['w', 'x', 'y', 'z']],
])

/**
 * solution:
 * It's just recursion, you should notice the basic case.
 */
