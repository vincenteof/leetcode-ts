/**
 * Given an integer array nums,
 * find a contiguous non-empty subarray within the array that has the largest product,
 * and return the product.
 * It is guaranteed that the answer will fit in a 32-bit integer.
 * A subarray is a contiguous subsequence of the array.
 */
function maxProduct(nums: number[]): number {
  const maxSub: number[] = []
  const minSub: number[] = []
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      maxSub[0] = nums[i]
      minSub[0] = nums[i]
      max = nums[i]
    } else {
      const curMax = Math.max(
        maxSub[i - 1] * nums[i],
        minSub[i - 1] * nums[i],
        nums[i]
      )
      const curMin = Math.min(
        maxSub[i - 1] * nums[i],
        minSub[i - 1] * nums[i],
        nums[i]
      )
      if (curMax > max) {
        max = curMax
      }
      maxSub[i] = curMax
      minSub[i] = curMin
    }
  }
  return max
}

/**
 * solution:
 * Similar to `max subarray`, we use maxSub[i] to represent max subarray product ending with nums[i].
 * In this problem, `min subarray` is also important, we must also record it.
 * maxSub[i] = Math.max(maxSub[i - 1] * nums[i], minSub[i - 1] * nums[i], nums[i])
 */
