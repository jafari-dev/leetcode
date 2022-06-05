// https://leetcode.com/problems/two-sum/

function twoSum(numbers: number[], target: number): number[] {
  const numbersLength = numbers.length;

  for (let i = 0; i < numbersLength - 1; i++) {
    for (let j = i + 1; j < numbersLength; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}
