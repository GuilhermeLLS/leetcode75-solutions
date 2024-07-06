/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let areInOppositeDirections = (a, b) => a > 0 && b < 0
  let res = []
  for (let i = 0; i < asteroids.length; i++) {
    if (res.length && areInOppositeDirections(res[res.length - 1], asteroids[i])) {
      res.push(asteroids[i])
      while (res.length > 1 && areInOppositeDirections(res[res.length - 2], res[res.length - 1])) {
        let left = res.pop()
        let right = res.pop()
        if (Math.abs(right) === Math.abs(left)) {
          continue
        } else if (Math.abs(right) > Math.abs(left)) {
          res.push(right)
        } else {
          res.push(left)
        }
      }
    } else {
      res.push(asteroids[i])
    }
  }
  return res
}

let testCases = [
  // [5, 10, -5],
  // [8, -8],
  // [10, 2, -5],
  // [-2, -2, -2, -2],
  [-2, -2, -2, 1]
]

testCases.forEach(t => console.log(asteroidCollision(t)))