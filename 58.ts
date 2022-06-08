// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(string: string): number {
  let counter = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === " " && counter !== 0) {
      return counter;
    } else if (string[i] !== " ") {
      counter++;
    }
  }

  return counter;
};
