const groupAnangram = (strs: string[]) => {
  const map: Map<string, string[]> = new Map();
  if (strs.length === 0) return [[]];
  for (let val of strs) {
    let key = val.split("").sort().join("");
    let items: string[] = map.get(key) || [];
    items.push(val);
    map.set(key, items);
  }
  let twoDMap: string[][] = [];
  for (let [_, value] of map) {
    twoDMap.push(value);
  }
  return twoDMap;
};
const strs = ["act", "pots", "tops", "cat", "stop", "hat"];

console.log(groupAnangram(strs));
