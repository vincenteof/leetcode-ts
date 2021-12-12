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


export function get<T>(matrix: T[][], i: number, j: number, initial?: T) {
  if (i < 0 || i >= matrix.length) {
    return initial
  }
  return matrix[i][j] || initial
}