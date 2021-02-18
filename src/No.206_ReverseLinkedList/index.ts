/**
 * Reverse a singly linked list.
 * @param head
 */
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
 * Basic skill. Store prev node each time.
 */
