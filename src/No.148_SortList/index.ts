import { ListNode } from '../types'

function sortList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }
  if (!head.next) {
    return head
  }
  const pivot = head
  let p = pivot.next
  let left = null
  let right = null
  let leftP = null
  let rightP = null
  while(p) {
    if (p.val < pivot.val) {
      if (left) {
        leftP.next = p
        leftP = leftP.next
      } else {
        left = p
        leftP = left
      }
    } else {
      if (right) {
        rightP.next = p
        rightP = rightP.next
      } else {
        right = p
        rightP = right
      }
    }  
    p = p.next
  }
  if (left) {
    leftP.next = null
  }
  if (right) {
    rightP.next = null
  }
  const leftSorted = sortList(left)
  const rightSorted = sortList(right)
  if (leftSorted) {
    let cur = leftSorted
    while (cur && cur.next) {
      cur = cur.next
    }
    cur.next = pivot
  }
  pivot.next = rightSorted
  return leftSorted || pivot
}


/**
 * solution: 
 * Quick sort with linked list. It's too slow. How to avoid duplicated iteration of left sorted.
 * Merge sort seems to be a better solution? First find the middle of the linked listed.
 */