/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param n
 */

function climbStairs(n: number): number {
  const count: number[] = []
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      count[i] = 1
    } else if (i === 1) {
      count[i] = 2
    } else {
      count[i] = count[i - 1] + count[i - 2]
    }
  }
  return count[n - 1]
}

/**
 * solution:
 * The basic recursion will be too slow because there are so many duplicate calculations.
 */
