// https://leetcode.com/problems/palindrome-number/

function isPalindrome(number: number): boolean {
  const numberAsString = number.toString();
  const numberLength = numberAsString.length;

  for (let index = 0; index < numberAsString.length / 2; index++) {
    if (numberAsString[index] !== numberAsString[numberLength - 1 - index]) return false;
  }

  return true;
}
