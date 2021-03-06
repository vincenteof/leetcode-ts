import { ListNode } from '../types'
/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * @param head
 */
function hasCycle(head: ListNode | null): boolean {
  if (head === null) {
    return false
  }
  let p1 = head
  let p2 = head
  while (true) {
    p1 = p1.next
    if (p2.next === null) {
      return false
    }
    p2 = p2.next.next
    if (p2 === null) {
      return false
    }
    if (p2 === p1) {
      return true
    }
  }
}

/**
 * solution:
 * If there is a cycle in the list, a faster pointer will reach the slower pointer at some point.
 * The faster pointer's speed is 2, while the other is 1.
 * In a cycle, their distance decreases 1 after each iteration.
 */
