/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== '*') {
      stack.push(s[i])
    } else {
      stack.pop()
    }
    
  }
  return stack.join('')
}

let testCases = [
  "leet**cod*e",
  "erase*****",
]

testCases.forEach(t => console.log(removeStars(t)))