// this is not a solution just me practicing djikstra

const graph = {
  A: { B: 1, C: 4 },       // Node A is connected to Node B with a weight of 1 and Node C with a weight of 4
  B: { A: 1, C: 2, D: 5 }, // ... and so on for other nodes
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
}

// or 

const graphAsMatrix = [
  [0, 1, 4, 0],
  [1, 0, 2, 5],
  [4, 2, 0, 1],
  [0, 5, 1, 0],
]




// djikstra is an algo used to find the shortest distance between nodes in a graph.
let djikstra = (graph, targetNode) => {
  let distances = {}
  let visited = new Set()
  let nodes = Object.keys(graph)

  nodes.forEach(n => { distances[n] = Infinity })
  distances[targetNode] = 0
  while (nodes.length) {
    nodes.sort((a, b) => distances[a] - distances[b])

    let closestNode = nodes.shift()

    // If the shortest distance to the closest node is still Infinity, then remaining nodes are unreachable and we can break
    if (distances[closestNode] === Infinity) break

    visited.add(closestNode)

    for (const neighboor in graph[closestNode]) {
      if (!visited.has(neighboor)) {
        // calculate new distance
        let distance = distances[closestNode] + graph[closestNode][neighboor]
        if (distance < distances[neighboor]) {
          distances[neighboor] = distance
        }
      }
    }
  }

  return distances
}


console.log(djikstra(graph, 'B'))