/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 * @param s
 * @param wordDic
 */
function wordBreak(s: string, wordDic: string[]): boolean {
  const wordBreakInner = createWordBreak(wordDic);
  return wordBreakInner(s);
}

function createWordBreak(wordDic: string[]) {
  const cache: Record<string, boolean> = {};
  wordDic.sort((a, b) => b.length - a.length);
  return function (s: string) {
    if (s.length === 0) {
      return true;
    }
    if (typeof cache[s] !== "undefined") {
      return cache[s];
    }
    let possible = false;
    for (let word of wordDic) {
      if (s.startsWith(word)) {
        possible = wordBreak(s.slice(word.length), wordDic);
      }
      if (possible) {
        cache[s] = true;

        return true;
      }
    }
    cache[s] = false;
    return false;
  };
}
// memo solutions seems not efficient enough for all test cases

// dp solution
function wordBreakDp(s: string, wordDic: string[]): boolean {
  if (s.length === 0) {
    return true;
  }
  const dp: boolean[] = [true];
  for (let i = 1; i <= s.length; i++) {
    let result = false;
    for (let j = 0; j < i; j++) {
      const target = s.slice(j, i);
      if (wordDic.includes(target) && dp[j]) {
        result = true;
        break;
      }
    }
    dp[i] = result;
  }
  return dp[s.length];
}
