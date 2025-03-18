//Problem: https://leetcode.com/problems/word-subsets/description/?envType=daily-question&envId=2025-01-10
import 'dart:math';

class Solution {
  List<String> wordSubsets(List<String> words1, List<String> words2) {
    List<String> result = [];

    // Helper function to count character frequencies in a word
    Map<String, int> getFrequency(String word) {
      Map<String, int> freq = {};
      for (var ch in word.split('')) {
        freq[ch] = (freq[ch] ?? 0) + 1;
      }
      return freq;
    }

    // Step 1: Find max frequency of each character across words2
    Map<String, int> maxFreq = {};
    for (String word in words2) {
      Map<String, int> freq = getFrequency(word);
      for (var entry in freq.entries) {
        maxFreq[entry.key] = max(maxFreq[entry.key] ?? 0, entry.value);
      }
    }

    // Step 2: Check words1 against maxFreq
    for (String word in words1) {
      Map<String, int> wordFreq = getFrequency(word);
      bool isUniversal = true;

      for (var entry in maxFreq.entries) {
        if ((wordFreq[entry.key] ?? 0) < entry.value) {
          isUniversal = false;
          break; // Break early if condition is not met
        }
      }

      if (isUniversal) {
        result.add(word);
      }
    }

    return result;
  }
}

void main(List<String> args) {
  List<String> words1 = ["acaac", "cccbb", "aacbb", "caacc", "bcbbb"],
      words2 = ["c", "cc", "b"];
  print(Solution().wordSubsets(words1, words2));
}
