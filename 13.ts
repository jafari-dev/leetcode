// https://leetcode.com/problems/roman-to-integer/

function getSymbolNumber(symbol: string): number {
  switch (symbol) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}

function romanToInt(string: string): number {
  if (string.length < 2) {
    return getSymbolNumber(string);
  } else {
    let result = 0;

    for (let index = 0; index < string.length; index++) {
      if (index === 0) {
        result += getSymbolNumber(string[index]);
      } else if (
        getSymbolNumber(string[index]) > getSymbolNumber(string[index - 1])
      ) {
        result +=
          getSymbolNumber(string[index]) -
          2 * getSymbolNumber(string[index - 1]);
      } else {
        result += getSymbolNumber(string[index]);
      }
    }

    return result;
  }
}
