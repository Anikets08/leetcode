const topKFrequent = (nums, k) => {
  // O(n log n)
  // let ints = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   ints.set(nums[i], (ints.get(nums[i]) || 0) + 1);
  // }
  // const sorted = new Map(
  //   [...ints.entries()].sort((a, b) => b[1] - a[1]),
  // ).keys();
  // return [...sorted].slice(0, k);
  //
  //
  // Optimised (Bucket sort)
  let ints = new Map();
  for (let i = 0; i < nums.length; i++) {
    ints.set(nums[i], (ints.get(nums[i]) || 0) + 1);
  }
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for (let [key, value] of ints) {
    freq[value].push(key);
  }

  let items = [];

  for (let i = freq.length - 1; i > 0; i--) {
    if (freq[i].length > 0) {
      items.push(...freq[i]);
    }
    if (items.length == k) break;
  }
  return items;
};

const nums = [1, 2, 2, 3, 3, 3, 4];
const ans = topKFrequent(nums, 2);
console.log(ans);
