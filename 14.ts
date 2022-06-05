// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(array: string[]): string {
  if (array.length === 0) {
    return "";
  } else if (array.length === 1) {
    return array[0];
  } else {
    let prefix = array[0];
    array.unshift();

    for (const string of array) {
      while (!string.startsWith(prefix)) {
        prefix = prefix.substring(0, prefix.length - 1);
      }
    }

    return prefix;
  }
}
