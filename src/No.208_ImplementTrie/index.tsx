/**
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.
 * There are various applications of this data structure, such as autocomplete and spellchecker.
 * Implement the Trie class:
 * Trie() Initializes the trie object.
 *   void insert(String word) Inserts the string word into the trie.
 *   boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
 *   boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 */
class Trie {
  children: Map<string, Trie>
  isCompleteWord: boolean

  constructor() {
    this.children = new Map()
    this.isCompleteWord = false
  }

  insert(word: string): void {
    if (!word || word.length === 0) {
      this.isCompleteWord = true
      return
    }
    const char = word[0]
    const restWord = word.slice(1, word.length)
    let nextTrieNode = this.children.get(char)
    if (!nextTrieNode) {
      const newTrieNode = new Trie()
      this.children.set(char, newTrieNode)
      nextTrieNode = newTrieNode
    }
    nextTrieNode.insert(restWord)
  }

  search(word: string): boolean {
    if (!word || word.length === 0) {
      return this.isCompleteWord
    }
    const char = word[0]
    const restWord = word.slice(1, word.length)
    const nextTrieNode = this.children.get(char)
    if (!nextTrieNode) {
      return false
    }
    return nextTrieNode.search(restWord)
  }

  startsWith(prefix: string): boolean {
    if (!prefix || prefix.length === 0) {
      return true
    }
    const char = prefix[0]
    const restPrefix = prefix.slice(1, prefix.length)
    const nextTrieNode = this.children.get(char)
    if (!nextTrieNode) {
      return false
    }
    return nextTrieNode.startsWith(restPrefix)
  }
}

/**
 * solution:
 * Just trie implementation. Maybe the code could be more elegant.
 */
