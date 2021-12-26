/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 * Implement the LRUCache class:
 *    `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.
 *    `int get(int key)` Return the value of the key if the key exists, otherwise return -1.
 *    `void put(int key, int value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
 * The functions get and put must each run in O(1) average time complexity.
 */

type CacheNode = {
  key: number
  value: number
  next?: CacheNode
  prev?: CacheNode
}

class LRUCache {
  kv: Map<number, CacheNode>
  capacity: number
  head?: CacheNode
  tail?: CacheNode

  constructor(capacity: number) {
    this.kv = new Map()
    this.capacity = capacity
  }

  _removeOldest() {
    const key = this.head.key
    if (this.kv.size === 1) {
      this.head = undefined
      this.tail = undefined
    } else {
      const nextHead = this.head.next
      nextHead.prev = undefined
      this.head = nextHead
    }
    this.kv.delete(key)
  }

  _touchToNewest(key: number) {
    const node = this.kv.get(key)
    if (this.kv.size === 1) {
      return node
    }
    const prevNode = node.prev
    const nextNode = node.next
    if (node === this.tail) {
     return node
    } 
    if (node === this.head) {
      this.head = nextNode
    }
    if (prevNode) {
      prevNode.next = nextNode
    }
    if (nextNode) {
      nextNode.prev = prevNode
    }
    node.next = undefined
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
    return node
  }

  get(key: number): number {
    if (!this.kv.has(key)) {
      return -1
    }
    const targetNode = this._touchToNewest(key)
    return targetNode.value
  }

  put(key: number, value: number): void {
    const newNode: CacheNode = {
      key,
      value,
    }
    if (this.kv.size === this.capacity && !this.kv.has(key)) {
      this._removeOldest()
    }
    if (this.kv.size === 0) {
      this.head = newNode
      this.tail = newNode
      this.kv.set(key, newNode)
      return
    }
    if (this.kv.has(key)) {
      const targetNode = this._touchToNewest(key)
      targetNode.value = value
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
      this.kv.set(key, newNode)
    }
  }
}

/**
 * solution:
 * Operation runs in O(1) time, so lookup needs to use hashmap.
 * We use an linked-list to stored the recent usage info.
 * Element in tail is the newest while the head is the oldest.
 * The link list must be double-linked because we want to splice at any point of the list.
 * (Imperative codes are so ugly and easy to mess up. Is there any other more elegant way?)
 */