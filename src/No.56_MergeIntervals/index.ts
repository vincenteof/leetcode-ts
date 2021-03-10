/**
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * @param intervals
 */
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  let result = []
  let curIntervals = intervals

  while (curIntervals.length > 0) {
    const [first, ...restIntervals] = curIntervals
    if (result.length === 0) {
      result.push(first)
    } else {
      let merged = false
      for (let i = 0; i < result.length; i++) {
        if (!(first[0] > result[i][1] || result[i][0] > first[1])) {
          result[i] = [
            Math.min(first[0], result[i][0]),
            Math.max(first[1], result[i][1]),
          ]
          merged = true
          break
        }
      }
      if (!merged) {
        result = [first, ...result]
      }
    }
    curIntervals = restIntervals
  }

  return result
}

/**
 * solution:
 * This straight-head solution seems quit confusing.
 */
