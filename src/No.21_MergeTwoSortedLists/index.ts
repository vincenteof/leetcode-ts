/**
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * @param l1
 * @param l2
 */
function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 || !l2) {
    return l1 || l2
  }
  // we insert the one whose head value is bigger to the other
  if (l1.val > l2.val) {
    let tmp = l1
    l1 = l2
    l2 = tmp
  }
  let ret = l1
  let prevL1 = null
  while (l1 && l2) {
    const l1Next = l1.next
    const l2Next = l2.next
    if (l2.val < l1.val) {
      prevL1.next = l2
      l2.next = l1
      prevL1 = l2
      l2 = l2Next
    } else {
      prevL1 = l1
      l1 = l1Next
    }
  }
  if (l2) {
    prevL1.next = l2
  }
  return ret
}

/**
 * solutions:
 * Just insert one to the other.
 * Notice that you should not move the l1 pointer after it being inserted.
 */
