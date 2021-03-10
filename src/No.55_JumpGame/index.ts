/**
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * @param nums
 */
function canJump(nums: number[]): boolean {
  const canRecord = []
  for (let i = nums.length - 1; i > -1; i--) {
    if (i === nums.length - 1) {
      canRecord[i] = true
    } else {
      canRecord[i] = can(canRecord, nums.length, i, nums[i])
    }
  }
  return canRecord[0]
}

function can(canRecord: boolean[], len: number, index: number, value: number) {
  let result = false
  for (let i = 0; i < value && index + i + 1 < len; i++) {
    result = result || canRecord[index + i + 1]
  }
  return result
}

/**
 * solution:
 * We can reach to the end if we can reach to any point that reaches to the end.
 */
