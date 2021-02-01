/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
 * Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 * Notice that you may not slant the container.
 *
 * @param height
 */
function maxArea(height: number[]): number {
  let i = 0
  let j = height.length
  let max = 0
  while (i < j) {
    const l = height[i]
    const r = height[j - 1]
    let h: number
    if (r > l) {
      h = l
      i++
    } else {
      h = r
      j--
    }
    const cur = h * (j - i)
    if (cur > max) {
      max = cur
    }
  }
  return max
}

/**
 * solution:
 * The area is determined by the lower height and the width.
 * We can first make the width largest, which means the first line and last line.
 * When we move the pointer, the width becomes smaller, so we must make the height larger.
 * Notice that we cannot move pointer of the higher liner, because the area is determined by the lower one.
 */
