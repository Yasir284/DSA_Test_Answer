// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// a. 1 <= s.length <= 10^5
// b. s consists of only lowercase English letters.

let s = "leetcode";
// s = "aabb";
// s = "loveleetcode";

function firstUniqueChar(s) {
  let charCountMap = new Map();

  for (let i = 0; i < s.length; i++) {
    charCountMap.set(s[i], (charCountMap.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (charCountMap.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}
console.log(firstUniqueChar(s));
