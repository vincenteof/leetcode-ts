/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * There is only one repeated number in nums, return this repeated number.
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 */

function findDuplicate(nums: number[]): number {
    const records = Array(nums.length).fill(0)
    for (let num of nums) {
        if (records[num] === 1) {
            return num
        }
        records[num] = 1
    }
    return 0
};

// [1,3,4,2,2]
// [0,0,0,0,0]
// [0,1,1,1,1]