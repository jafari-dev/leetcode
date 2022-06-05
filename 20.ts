// https://leetcode.com/problems/valid-parentheses/

function isValid(string: string): boolean {
  if (string.length % 2 !== 0) return false;

  const stack: string[] = [];

  for (const char of string) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      const lastOpenParenthese = stack.pop();

      if (char === ")") {
        if (lastOpenParenthese === "[" || lastOpenParenthese === "{")
          return false;
      }
      if (char === "]") {
        if (lastOpenParenthese === "(" || lastOpenParenthese === "{")
          return false;
      }
      if (char === "}") {
        if (lastOpenParenthese === "(" || lastOpenParenthese === "[")
          return false;
      }
    }
  }

  if (stack.length === 0) return true;
  else return false;
}
