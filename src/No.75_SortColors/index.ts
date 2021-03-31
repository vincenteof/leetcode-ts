/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * @param nums
 */
function sortColors(nums: number[]): void {
  const counts = [0, 0, 0]
  for (const num of nums) {
    counts[num] += 1
  }
  let j = 0
  for (let i = 0; i < 3; i++) {
    while (counts[i] > 0) {
      nums[j] = i
      j += 1
      counts[i] -= 1
    }
  }
}

/**
 * solution:
 * It's two-pass.
 */
