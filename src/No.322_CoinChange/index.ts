/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 * @param coins
 * @param amount
 */

function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1)
  dp.fill(-1)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const c = coins[j]
      if (c <= i && dp[i - c] >= 0) {
        dp[i] = dp[i] === -1 ? dp[i - c] + 1 : Math.min(dp[i], dp[i - c] + 1)
      }
    }
  }
  return dp[amount]
}

/**
 * solution:
 * For every i, there k coins smaller than i
 * F(i) = min(F(i-c1), F(i-c2),...,F(i-ck)) + 1
 * Here, we reduce original problem to a smaller sub problem.
 */