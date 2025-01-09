class Solution {
  List<int> twoSum(List<int> nums, int target) {
    //worst case
    // List<int> result = [];
    // for (var i = 0; i < nums.length; i++) {
    //   for (var j = i + 1; j < nums.length; j++) {
    //     int sum = nums[i] + nums[j];
    //     if (sum == target) {
    //       result = [i, j];
    //     }
    //   }
    // }

    //best case
    Map<int, int> valueIndexMap = {};
    for (var i = 0; i < nums.length; i++) {
      int numberA = nums[i];
      int numberB = target - numberA;
      if (valueIndexMap.containsKey(numberB)) {
        return [i, valueIndexMap[numberB]!];
      }
      valueIndexMap[numberA] = i;
    }
    return [];
  }
}

void main(List<String> args) {
  print("${Solution().twoSum([2, 7, 11, 15], 17)}");
}
