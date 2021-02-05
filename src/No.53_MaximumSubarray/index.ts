/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * @param nums
 */
function maxSubArray(nums: number[]): number {
  let max = undefined
  const maxSub: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      maxSub[i] = nums[i]
      max = nums[i]
    } else {
      const curMax = maxSub[i - 1] < 0 ? nums[i] : maxSub[i - 1] + nums[i]
      maxSub[i] = curMax
      if (curMax > max) {
        max = curMax
      }
    }
  }
  return max
}

/**
 * solution:
 * We want solve it by one pass. So we must find a way to reuse information from previous traversal.
 * Let `maxSub[i]` become the max sub array value from index `i` to `0`, it a way to store previous information.
 */
