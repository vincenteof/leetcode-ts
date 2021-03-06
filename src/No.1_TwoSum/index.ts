/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param nums
 * @param target
 */
function twoSum(nums: number[], target: number): number[] {
  const indexMap = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i]
    if (indexMap.has(another)) {
      return [indexMap.get(another), i]
    } else {
      indexMap.set(nums[i], i)
    }
  }
}

/**
 * Solution:
 * The key is to reuse information from prev iteration.
 */
