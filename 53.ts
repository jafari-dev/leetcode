// https://leetcode.com/problems/maximum-subarray/

function maxSubArray(array: number[]): number {
  let maxSum = array.shift();
  let currentMaxSum = maxSum;

  for (const number of array) {
    currentMaxSum = Math.max(currentMaxSum + number, number);
    maxSum = Math.max(maxSum, currentMaxSum);
  }

  return maxSum;
}
