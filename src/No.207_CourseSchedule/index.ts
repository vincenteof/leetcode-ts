/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 */

class G {
  vertices: number
  edges: number
  inDegree: number[]
  adj: Set<number>[]

  constructor(vertices: number) {
    this.vertices = vertices
    this.edges = 0
    this.inDegree = new Array(vertices).fill(0)
    this.adj = new Array(vertices)
    for (let i = 0; i < vertices; i++) {
      this.adj[i] = new Set()
    }
  }

  addEdge(from: number, to: number) {
    this.inDegree[to] += 1
    this.adj[from].add(to)
    this.edges += 1
  }

  removeEdge(from: number, to: number) {
    this.inDegree[to] -= 1
    this.adj[from].delete(to)
    this.edges -= 1
  }

  getInDegree(v: number) {
    return this.inDegree[v]
  }

  getAdj(v: number) {
    return this.adj[v]
  }

  getEdges() {
    return this.edges
  }
}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const g = new G(numCourses)
  for (const [to, from] of prerequisites) {
    g.addEdge(from, to)
  }
  const leaves = []
  for (let i = 0; i < numCourses; i++) {
    if (g.getInDegree(i) === 0) {
      leaves.push(i)
    }
  }
  while (leaves.length > 0) {
    const leaf = leaves.pop()
    const adj = g.getAdj(leaf)
    for (let v of adj) {
      g.removeEdge(leaf, v)
      if (g.getInDegree(v) === 0) {
        leaves.push(v)
      }
    }
  }
  return g.getEdges() === 0
}

/**
 * solution:
 * Construct the graph first.
 * Then topological sort.
 */