// https://leetcode.com/problems/add-binary/

function addBinary(a: string, b: string): string {
  const digits: number[] = [];

  const maxLength = Math.max(a.length, b.length);
  const one = a.padStart(maxLength, "0");
  const two = b.padStart(maxLength, "0");

  let carry = 0;

  for (let index = maxLength - 1; index >= 0; index--) {
    const currentSum = parseInt(one[index]) + parseInt(two[index]) + carry;

    if (currentSum < 2) {
      digits.unshift(currentSum);
      carry = 0;
    } else {
      if (index === 0) {
        digits.unshift(currentSum % 2);
        digits.unshift(1);
      } else {
        digits.unshift(currentSum % 2);
        carry = 1;
      }
    }
  }

  return digits.join("");
}
