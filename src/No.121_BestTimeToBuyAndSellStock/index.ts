/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * @param prices
 */
function maxProfit(prices: number[]): number {
  let highest = 0
  let max = 0
  for (let i = prices.length - 1; i > -1; i--) {
    if (prices[i] > highest) {
      highest = prices[i]
    }
    const profit = highest - prices[i]
    if (profit > max) {
      max = profit
    }
  }
  return max
}

/**
 * solution:
 * We sell the stock at future, so we must find the highest price in future.
 * We record the highest price from the tail of the array.
 * We can also record the lowest price from the beginning.
 * Seems the dp is more faster?
 */
