export function binarySearch(
  arr: number[],
  start: number,
  end: number,
  target: number
) {
  if (arr.length === 0) {
    return -1
  }
  let l = start
  let r = end
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2)
    if (arr[mid] > target) {
      r = mid
    } else if (arr[mid] < target) {
      l = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
