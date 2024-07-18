/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const nodes = isConnected[0].length
  const graph = new Map()
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < nodes; j++) {
      if (isConnected[i][j] === 1) {
        const value = graph.get(i) ?? []
        value.push(j)
        graph.set(i, value)
      }
    }
  }

  let visited = {}
  let provinces = 0

  const dfs = (startNode) => {
    visited[startNode] = true
    for (let neighbor of graph.get(startNode)) {
      if (!visited[neighbor]) {
        visited[neighbor] = true
        dfs(neighbor)
      }
    }
  }

  for (let i = 0; i < nodes; i++) {
    if (!visited[i]) {
      provinces++
      dfs(i)
    }
  }

  return provinces
}

let testCases = [
  [[[1, 1, 0], [1, 1, 0], [0, 0, 1]], 2],
  [[[1, 0, 0], [0, 1, 0], [0, 0, 1]], 3]
]

testCases.forEach(([input, output]) => {
  let res = findCircleNum(input)
  console.assert(res === output, `failed for ${input}. Expected ${output} but received ${res}`)
})