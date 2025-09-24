class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    return strs.reduce((a, b) => `${a}${b.length}#${b}`, "");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    let modifiedStr: string = str;

    let newVal: string[] = [];

    while (true) {
      let splits: string[] = modifiedStr.split("#");
      let totalDummyLen: number = splits[0].length + 1;
      let chLen: number = parseInt(splits[0]);

      if (isNaN(chLen)) break;

      let firstIndex: number = totalDummyLen;
      let lastIndex: number = firstIndex + chLen;

      let val: string = modifiedStr.slice(firstIndex, lastIndex);
      newVal.push(val);

      modifiedStr = modifiedStr.slice(lastIndex);
    }

    return newVal;
  }
}

const arr = ["we", "say", ":", "yes", "!@#$%^&*()"];
const encode = new Solution().encode(arr);
const decode = new Solution().decode(encode);
