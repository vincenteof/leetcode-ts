/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 */



function lengthOfLIS(nums: number[]): number {
    const dp: [number] = [1]
    for (let i = 1; i < nums.length; i++) {
        let max = 0
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[j] > max) {
                max = dp[j]
            }
        }
        dp[i] = max + 1
    }
    return Math.max(...dp)
};

