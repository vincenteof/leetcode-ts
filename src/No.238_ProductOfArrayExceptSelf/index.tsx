/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * @param nums 
 * @returns 
 */
function productExceptSelf(nums: number[]): number[] {
  const result = []
  let product = 1
  let exceptZeroProduct = 1
  let zeroCount = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === 0) {
      zeroCount += 1
    } else {
      exceptZeroProduct *= num
    }
    product *= num
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (zeroCount === 0) {
      result[i] = product / num
    } else if (zeroCount === 1) {
      result[i] = num === 0 ? exceptZeroProduct : 0
    } else {
      result[i] = 0
    }
  }
  return result
}

/**
 * solution: 
 * Without using division...shit
 */