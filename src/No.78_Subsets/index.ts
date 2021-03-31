/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * @param nums
 */
function subsets(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [[]]
  }
  const [first, ...rest] = nums
  const restSets = subsets(rest)
  return [...restSets, ...restSets.map((sets) => [first, ...sets])]
}

/**
 * solution:
 * Recursively constructing subsets.
 */
