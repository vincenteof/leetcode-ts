/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 * Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 * @param nums
 */
function findDisappearedNumbers(nums: number[]): number[] {
  for (let num of nums) {
    const absNum = Math.abs(num)
    if (nums[absNum - 1] > 0) {
      nums[absNum - 1] *= -1
    }
  }
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }
  return result
}

/**
 * solution:
 * Too hard to come across the solution.
 */
