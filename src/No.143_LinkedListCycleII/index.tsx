import { ListNode } from '../types'

function detectCycle(head: ListNode | null): ListNode | null {
  let p = head
  let fastP = head
  let hasCycle = false

  while (fastP && fastP.next && fastP.next.next) {
    p = p.next
    fastP = fastP.next.next
    if (p === fastP) {
      hasCycle = true
      break
    }
  }

  if (!hasCycle) {
    return null
  }

  p = head

  while (p !== fastP) {
    p = p.next
    fastP = fastP.next
  }

  return p
}

/**
 * solution:
 * We already know how to detect whether there is an cycle in a linked list.
 * We two pointer meet, the distance fast pointer runs must twice the slow pointer runs.
 * Let 'a' stands for the start, 
 * 'b' stands for the beginning of the the cycle, 
 * 'c' stands fir the end.
 * The slow pointer runs: a -> b plus b -> c
 * The fast pointer runs: a -> b plus b -> c plus c -> b plus b -> c
 * So c -> b must equals to a -> b
 */