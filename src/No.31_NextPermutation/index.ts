/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
 * The replacement must be in place and use only constant extra memory.
 * @param nums
 */
function nextPermutation(nums: number[]): void {
  if (nums.length < 2) {
    return
  }

  for (let i = nums.length - 1; i > -1; i--) {
    if (i === 0) {
      nums.sort((a, b) => a - b)
      break
    }

    if (nums[i - 1] < nums[i]) {
      const subArr = nums.slice(i, nums.length).sort((a, b) => a - b)
      let found = false
      for (let j = i; j < nums.length; j++) {
        // find the smallest that is bigger than nums[i-1]
        if (!found && subArr[j - i] > nums[i - 1]) {
          // swap
          const tmp = nums[i - 1]
          nums[i - 1] = subArr[j - i]
          subArr[j - i] = tmp
          found = true
        }
        // copy to original array
        nums[j] = subArr[j - i]
      }
      break
    }
  }
}

/**
 * solution:
 * The key to solve it is to understand how permutations are sorted.
 * The smallest permutation is the one in ascending order.
 * When some descending pairs exist, it becomes bigger.
 * So we must find the first descending pair from the end of the array, and make a swap with some other element visited.
 * After swapped, we has to sort elements visited previously.
 */
