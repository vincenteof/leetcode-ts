/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, return the Hamming distance between them.
 * @param x
 * @param y
 * @returns
 */
function hammingDistance(x: number, y: number): number {
  let distance = 0
  let temp = x ^ y
  while (temp > 0) {
    distance += temp & 1
    temp >>= 1
  }
  return distance
}

/**
 * solution:
 * Simple bit tricks.
 */
