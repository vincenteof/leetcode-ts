/**
 * Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
 */

function canPartition(nums: number[]): boolean {
  let total = 0;
  let maxNum = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }
  const target = Math.floor(total / 2);
  // cut edge
  if (maxNum > target) {
    return false;
  }
  if (target * 2 !== total) {
    return false;
  }

  const dp = Array(nums.length)
    .fill(0)
    .map(() => {
      return Array(target + 1).fill(false);
    });
  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }
  dp[0][nums[0]] = true;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= target; j++) {
      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j - nums[i]] || dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[nums.length - 1][target];
}

// dp[i][j] = dp[i-1][j-nums[i]] || dp[i-1][j]
