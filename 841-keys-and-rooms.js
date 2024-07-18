/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let keySet = new Set()
  
  let dfs = (room) => {
    if(!keySet.has(room)) {
      keySet.add(room)
      for (const key of rooms[room]) {
        dfs(key)  
      }
    }
  }
  dfs(0)
  return keySet.size === rooms.length
}

let testCases = [
  [[1], [2], [3], []],
  [[1, 3], [3, 0, 1], [2], [0]],
  [[2], [], [1]],
  [[4], [3], [], [2, 5, 7], [1], [], [8, 9], [], [], [6]]
]

testCases.forEach(t => console.log(canVisitAllRooms(t)))