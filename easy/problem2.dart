// Problem: https://leetcode.com/problems/roman-to-integer/
class Solution {
  int romanToInt(String s) {
    Map<String, int> romanToInt = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
    };
    int sum = 0;
    List<String> romanList = s.split("");
    for (int i = 0; i < romanList.length; i++) {
      int index = i;
      String roman = romanList[i];

      if (index + 1 < romanList.length &&
          romanToInt[roman]! < romanToInt[romanList[i + 1]]!) {
        sum += -romanToInt[roman]!;
      } else {
        sum += romanToInt[roman]!;
      }
    }

    return sum;
  }
}

void main(List<String> args) {
  print("sum is ${Solution().romanToInt("LVIII")}");
}
