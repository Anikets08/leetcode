class Solution {
  int removeDuplicates(List<int> nums) {
    Map<int, int> numMap = {};
    List<int> newArr = [];
    for (int num in nums) {
      numMap[num] = (numMap[num] ?? 0) + 1;
    }
    for (var entry in numMap.entries) {
      newArr.add(entry.key);
    }
    print(newArr.length);
    return newArr.length;
  }
}

void main(List<String> args) {
  var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  Solution().removeDuplicates(nums);
}
