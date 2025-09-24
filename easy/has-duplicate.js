const hasDuplicate = (nums) => {
  let vals = [];
  for (let i = 0; i < nums.length; i++) {
    if (vals.includes(nums[i])) return true;
    else {
      vals.push(nums[i]);
    }
  }
  return false;
};
let arr = [1, 2, 4, 5];
console.log(hasDuplicate(arr));
