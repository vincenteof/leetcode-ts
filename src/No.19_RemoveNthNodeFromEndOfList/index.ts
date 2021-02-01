/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * Follow up: Could you do this in one pass?
 * The number of nodes in the list is sz.
 *   1 <= sz <= 30
 *   0 <= Node.val <= 100
 *   1 <= n <= sz
 *
 * @param head
 * @param n
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const arr = [] as ListNode[]
  let cur = head
  while (cur) {
    arr.push(cur)
    cur = cur.next
  }
  const targetIndex = arr.length - n
  const target = arr[targetIndex]
  if (targetIndex > 0) {
    const prev = arr[targetIndex - 1]
    prev.next = target.next
    return head
  } else {
    return target.next
  }
}
/**
 * solution:
 * Use an array to store all node, then you can play with them.
 */

/**
 * solution:
 * Make two two pointer, when the distance between them reaches n, move both.
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
