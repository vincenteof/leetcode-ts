/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
 * @param nums
 */
function singleNumber(nums: number[]): number {
  const records = new Set<number>()
  for (let num of nums) {
    if (records.has(num)) {
      records.delete(num)
    } else {
      records.add(num)
    }
  }
  return [...records][0]
}

/**
 * solution:
 * Very trivial.
 * I came across the bit operation solution roughly.
 * But i have forgotten how to use these tricks...
 */
