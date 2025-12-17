// Problem: https://leetcode.com/problems/container-with-most-water

function maxArea(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    if (area > maxArea) {
      maxArea = area;
    }
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return maxArea;
}
let height: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let result: number = maxArea(height);
console.log(result);
