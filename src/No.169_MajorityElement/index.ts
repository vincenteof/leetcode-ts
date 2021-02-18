/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 * @param nums
 */
function majorityElement(nums: number[]): number {
  let count = 0
  let majority: number
  for (let num of nums) {
    if (count === 0) {
      majority = num
      count++
    } else if (num === majority) {
      count++
    } else {
      count--
    }
  }
  return majority
}

/**
 * solution:
 * What's majority element?
 * The count of it is bigger than the count of the others.
 * So when we find different numbers, we eliminate them.
 * We will find the majority element in the end.
 */
