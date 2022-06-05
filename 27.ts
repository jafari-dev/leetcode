// https://leetcode.com/problems/remove-element/

function removeElement(array: number[], value: number): number {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      array.splice(index, 1);
      index--;
    }
  }

  return array.length;
};