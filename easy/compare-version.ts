function compareVersion(version1: string, version2: string): number {
  let v1: string[] = version1.split(".");
  let v2: string[] = version2.split(".");
  console.log(v1, v2);
  let l1 = v1.length;
  let l2 = v2.length;
  for (let i = 0; i < Math.max(l1, l2); i++) {
    let num1: number = i >= l1 ? 0 : parseInt(v1[i]);
    let num2: number = i >= l2 ? 0 : parseInt(v2[i]);
    if (num1 < num2) return -1;
    if (num1 > num2) return 1;
  }
  return 0;
}

console.log(compareVersion("1", "1.1"));
// 1.01 -> 01
// 1.001 -> 001
//
// v1 < v2 -> -1, v1 > v2 -> 1
// else -> 0
