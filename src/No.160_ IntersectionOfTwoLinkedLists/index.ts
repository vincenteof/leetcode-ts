/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 * For example, the following two linked lists:
 * @param headA
 * @param headB
 */
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) {
    return null
  }

  let pa = headA
  let pb = headB
  while (pa !== null || pb !== null) {
    if (pa === null) {
      pa = headB
    }
    if (pb === null) {
      pb = headA
    }
    if (pa === pb) {
      return pb
    }
    pa = pa.next
    pb = pb.next
  }
  return null
}

/**
 * solution:
 * If the 2 linked list has the same length, the two pointer will move at the `same speed`.
 * If the length is different, after linking two lists together, their `speed` will the same.
 * And they will meat at the intersection node.
 */
