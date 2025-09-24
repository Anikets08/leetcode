var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    // Update sMap
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);

    // Update tMap
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }

  // Compare frequencies
  for (let [char, count] of sMap) {
    if (tMap.get(char) !== count) return false;
  }

  return true;
};

let s = "aacc";
let t = "ccac";
const isVal = isAnagram(s, t);
console.log(isVal);
