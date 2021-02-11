/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 * @param nums
 */
function permute(nums: number[]): number[][] {
  return permuteRecur(nums, [[]])
}

function permuteRecur(curNums: number[], prevAcc: number[][]) {
  if (curNums.length === 0) {
    return prevAcc
  }
  const result = []
  for (let i = 0; i < curNums.length; i++) {
    const newCurNums = [...curNums]
    const [num] = newCurNums.splice(i, 1)
    const newPrevAcc = prevAcc.map((acc) => [...acc, num])
    const curResult = permuteRecur(newCurNums, newPrevAcc)
    result.push(...curResult)
  }
  return result
}

/**
 * solution:
 * Basic recursion.
 * But it is too slow and memory usage is huge.
 */
