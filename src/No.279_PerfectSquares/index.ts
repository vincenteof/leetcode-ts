/**
 * Given an integer n, return the least number of perfect square numbers that sum to n.
 * A perfect square is an integer that is the square of an integer; 
 * in other words, it is the product of some integer with itself. 
 * For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
 * @param n 
 */

const perfectNumber = []
for (let i =0; i * i <= 10000; i++) {
  perfectNumber.push(i * i)
}

function numSquares(n: number): number {
  const dp = new Array(n+1)
  dp.fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < perfectNumber.length &&  perfectNumber[j] <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - perfectNumber[j]] + 1)
    }
  }
  return dp[n]
}


/**
 * The same as no.322
 */