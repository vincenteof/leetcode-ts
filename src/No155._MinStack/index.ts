/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *   push(x) -- Push element x onto stack.
 *   pop() -- Removes the element on top of the stack.
 *   top() -- Get the top element.
 *   getMin() -- Retrieve the minimum element in the stack.
 */

interface StackElem {
  val: number
  prevMin?: number
}

class MinStack {
  private elements: StackElem[]

  constructor() {
    this.elements = []
  }

  push(x: number): void {
    if (this.elements.length === 0) {
      this.elements.push({
        val: x,
        prevMin: undefined,
      })
      return
    }
    const topElem = this.topElem()
    this.elements.push({
      val: x,
      prevMin: topElem.prevMin < topElem.val ? topElem.prevMin : topElem.val,
    })
  }

  pop(): void {
    this.elements.pop()
  }

  private topElem(): StackElem {
    return this.elements[this.elements.length - 1]
  }

  top(): number {
    return this.topElem().val
  }

  getMin(): number {
    const topElem = this.topElem()
    return topElem.prevMin < topElem.val ? topElem.prevMin : topElem.val
  }
}

/**
 * solution:
 * We record previous minimal in current item.
 * So we can find the true minimal in the top item: `topElem.prevMin < topElem.val ? topElem.prevMin : topElem.val`
 * We can also use two stack as a way to store previous minimal.
 */
