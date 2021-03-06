/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * Notice that the solution set must not contain duplicate triplets.
 * @param nums
 */
function threeSum(nums: number[]): number[][] {
  nums.sort()
  const result: number[][] = []
  const firstLevel = new Set<number>()
  const secondLevelUsed = new Set<number>()
  const prevNums = new Set<number>()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break
    }
    if (firstLevel.has(nums[i])) {
      continue
    }
    for (let j = i + 1; j < nums.length; j++) {
      const anotherNum = -nums[i] - nums[j]
      if (prevNums.has(anotherNum) && !secondLevelUsed.has(nums[j])) {
        result.push([nums[i], nums[j], anotherNum])
        secondLevelUsed.add(nums[j])
      } else {
        prevNums.add(nums[j])
      }
    }
    firstLevel.add(nums[i])
    secondLevelUsed.clear()
    prevNums.clear()
  }
  return result
}

/**
 * solution:
 * To remove duplicate triplets, we just skip duplicate starting point.
 * And we also need to enumerate staring point in ascending order to prevent answers like `[-1, 0, 1]` and `[0, -1, 1]`.
 * After fix one number, it becomes two sum problem.
 */
