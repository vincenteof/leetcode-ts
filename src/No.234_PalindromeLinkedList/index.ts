import { ListNode } from '../types'

/**
 * Given a singly linked list, determine if it is a palindrome.
 * @param head
 */
function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return true
  }
  let fast = head
  let slow = head
  let prevSlow: ListNode = null
  while (fast && fast.next) {
    fast = fast.next.next
    prevSlow = slow
    slow = slow.next
  }
  let p1: ListNode = null
  let p2: ListNode = null
  if (!fast) {
    p1 = prevSlow
    p2 = slow
  } else {
    p1 = slow
    p2 = slow
  }

  p2 = reverseList(p2)
  p1 = head

  while (p2) {
    if (p2.val !== p1.val) {
      return false
    }
    p1 = p1.next
    p2 = p2.next
  }
  return true
}

function reverseList(head: ListNode | null): ListNode | null {
  let pPrev = null
  let p = head
  while (p) {
    let next = p.next
    p.next = pPrev
    pPrev = p
    p = next
  }

  return pPrev
}

/**
 * solution:
 * Just use the trivial idea. We need to have a way to find the mid of a linked list.
 * Using two pointers at different, we can find it.
 * We already know how to reverse a linked list.
 * Combine them together.
 */
