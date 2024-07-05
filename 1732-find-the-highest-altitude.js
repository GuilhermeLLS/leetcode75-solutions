/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0
  let prev = 0
  gain.unshift(0)
  for (let i = 1; i < gain.length; i++) {
    let altitude = gain[i] + gain[prev]
    gain[i] = altitude
    max = Math.max(max, altitude)
    prev++
  }

  return max

}

let testCases = [
  [-5, 1, 5, 0, -7],
  [-4, -3, -2, -1, 4, 3, 2],
]

testCases.forEach(t => console.log(largestAltitude(t)))