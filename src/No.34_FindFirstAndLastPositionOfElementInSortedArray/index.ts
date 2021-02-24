import { binarySearch } from '../utils'

/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * Follow up: Could you write an algorithm with O(log n) runtime complexity?
 */
function searchRange(nums: number[], target: number): number[] {
  const pos = binarySearch(nums, 0, nums.length, target)
  if (pos === -1) {
    return [-1, -1]
  }
  let l = -1
  let r = -1
  let i = pos
  while (i >= 0 && nums[i] === nums[pos]) {
    i--
  }
  l = i + 1
  i = pos
  while (i < nums.length && nums[i] === nums[pos]) {
    i++
  }
  r = i - 1
  return [l, r]
}

/**
 * solution:
 * We can use binary to find the target, then we expand the range from the target pos.
 */
