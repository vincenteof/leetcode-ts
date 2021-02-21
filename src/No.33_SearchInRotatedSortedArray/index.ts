import { binarySearch } from '../utils'
/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 */
function search(nums: number[], target: number): number {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  }
  let finalIndex = -1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      finalIndex = i
    }
  }
  if (finalIndex === -1) {
    return binarySearch(nums, 0, nums.length, target)
  }
  const leftResult = binarySearch(nums, 0, finalIndex + 1, target)
  const rightResult = binarySearch(nums, finalIndex + 1, nums.length, target)
  return leftResult >= 0 ? leftResult : rightResult >= 0 ? rightResult : -1
}

/**
 * solution:
 * The array is the concat of two sorted arrays.
 * So we find the boundary and use binary search in the two arrays.
 */
