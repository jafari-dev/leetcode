// https://leetcode.com/problems/implement-strstr/

function strStr(haystack: string, needle: string): number {
  if (haystack.length === 0 || needle.length === 0) return -1;
  if (haystack.length < needle.length) return -1;
  if (haystack === needle) return 0;
  else {
    for (let index = 0; index < haystack.length; index++) {
      if (haystack.slice(index, index + needle.length) === needle) return index;
    }

    return -1;
  }
}
