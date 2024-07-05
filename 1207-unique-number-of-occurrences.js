/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const foundSet = new Map()
  for (const element of arr) {
    foundSet.set(element, (foundSet.get(element) ?? 0) + 1)
  }

  let valuesFound = Array.from(foundSet.values())
  return valuesFound.length === new Set(valuesFound).size
}

let testCases = [
  [1, 2, 2, 1, 1, 3],
  [1, 2],
  [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0],
]

testCases.forEach(t => console.log(uniqueOccurrences(t)))