/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *   1. You must do this in-place without making a copy of the array.
 *   2. Minimize the total number of operations.
 * @param nums
 */
function moveZeroes(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let j = i
      for (; j < nums.length; j++) {
        if (nums[j] !== 0) {
          let tmp = nums[i]
          nums[i] = nums[j]
          nums[j] = tmp
          break
        }
      }
      if (j === nums.length) {
        break
      }
    }
  }
}

/**
 * solution:
 * We traverse the array, if we find a zero, we swap it with next non-zero value.
 */
