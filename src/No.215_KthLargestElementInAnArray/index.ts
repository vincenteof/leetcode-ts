/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * @param nums 
 * @param k 
 * @returns 
 */
function findKthLargest(nums: number[], k: number): number {
  const smallestK = nums.length - k + 1
  let subArr = nums
  let lengthFromStart = 0
  do {
    const pivot = subArr[0]
    const left = []
    const right = []
    for (let i = 1; i < subArr.length; i++) {
      if (subArr[i] < pivot) {
        left.push(subArr[i])
      } else {
        right.push(subArr[i])
      }
    }
    const lengthCur = lengthFromStart + left.length
    const lengthBeforeTarget = smallestK - 1
    if (lengthCur === lengthBeforeTarget) {
      return pivot
    } else if (lengthCur > lengthBeforeTarget) {
      subArr = left
      lengthFromStart = lengthFromStart
    } else {
      subArr = right
      lengthFromStart = lengthCur + 1
    }
  } while (subArr.length > 0)
}


/**
 * solution:
 * Basically, we can sort then use the kth elem of the sorted array.
 * Notice that if we know the target is in left part or the right, 
 * there is no work to do with another part.
 * So we can do some opt based on quick sorting.
 */