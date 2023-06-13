/**
 * Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
 */

function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((acc, cur) => acc + cur) / 2
    const target = Math.round(sum)
    if (target * 2 !== sum) {
        return false;
    }
    const dp = [true]
    for (let i = 1; i <= target; i++) {
        let result = false
        for (const num of nums) {
            if (num <= i) {
                result = dp[i - num]
            }
            if (result) {
                break
            }
        }
        dp[i] = result
    }
    return dp[target]
};