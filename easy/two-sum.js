const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    console.log(`index i`, i);
    for (let j = i + 1; j <= nums.length - 1; j++) {
      console.log(`index j`, i + 1);
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));
