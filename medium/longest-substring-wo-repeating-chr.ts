// Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Brute Force
function lengthOfLongestSubstringBrute(s: string): number {
  if (s.length === 0) return 0;
  let maxSub: number = 0;

  for (let i = 0; i < s.length; i++) {
    let chrs: string[] = [];
    for (let j = i; j < s.length; j++) {
      console.log("data, ", s[j]);
      if (chrs.includes(s[j])) {
        break;
      }
      chrs.push(s[j]);
    }
    if (chrs.length > maxSub) maxSub = chrs.length;
  }
  return maxSub;
}

// Optimised - sliding window
function lengthOfLongestSubstringOptimised(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return s.length;
  let maxSub: number = 0;
  let left: number = 0;
  let right: number = 0;
  let subString = "";
  while (left <= right && right < s.length) {
    if (!subString.includes(s[right])) {
      right += 1;
    } else {
      left += 1;
    }
    subString = s.substring(left, right);
    console.log(subString);
    if (subString.length > maxSub) {
      maxSub = subString.length;
    }
  }
  return maxSub;
}

// const text: string = "dvdf";
const text: string = "pwwkew";
// console.log(lengthOfLongestSubstringBrute(text));
console.log(lengthOfLongestSubstringOptimised(text));

/**
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
 */
