/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 * It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 * @param candidates
 * @param target
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const result = []
  function dfs(curTarget: number, combined: number[], idx: number) {
    if (curTarget === 0) {
      result.push(combined)
      return
    }
    if (curTarget < 0 || idx === candidates.length) {
      return
    }
    dfs(curTarget - candidates[idx], [...combined, candidates[idx]], idx)
    dfs(curTarget, combined, idx + 1)
  }
  dfs(target, [], 0)
  return result
}

/**
 * solution:
 * We can select one time any time or not select it.
 */
