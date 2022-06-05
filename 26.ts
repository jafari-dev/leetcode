// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(array: number[]): number {
  if (array.length < 2) {
    return array.length;
  } else {
    for (let index = 1; index < array.length; index++) {
      if (array[index - 1] === array[index]) {
        array.splice(index - 1, 1);
        index--;
      }
    }

    return array.length;
  }
}
