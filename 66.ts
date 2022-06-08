// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
  const newDigits: number[] = [];
  let carry = 1;

  for (let index = digits.length - 1; index >= 0; index--) {
    if (digits[index] + carry === 10) {
      if (index === 0) {
        newDigits.unshift(0);
        newDigits.unshift(1);
      } else {
        newDigits.unshift(0);
        carry = 1;
      }
    } else {
      newDigits.unshift(digits[index] + carry);
      carry = 0;
    }
  }

  return newDigits;
}
