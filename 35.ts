// https://leetcode.com/problems/search-insert-position/

function searchInsert(array: number[], target: number): number {
  if (array.length === 0) return 0;
  else {
    for (let index = 0; index < array.length; index++) {
      if (index === array.length - 1) {
        if (target <= array[index]) return index;
        else return index + 1;
      } else if (target <= array[index]) {
        return index;
      }
    }
  }
}
