/**
* @param {string} s
* @return {string}
*/
var decodeString = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      stack.push(s[i])
    } else {
      let sub = ''
      let aux = stack.pop()
      while (aux != '[') {
        sub = aux.concat(sub)
        aux = stack.pop()
      }
      aux = stack.pop()
      let num = ''
      while(parseInt(+aux) >= 0 && parseInt(+aux)  <=9) {
        num = aux.concat(num)
        aux = stack.pop()
      }
      sub = sub.repeat(parseInt(num))
      stack.push(...sub.split(''))
    }
  }
  return stack.join('')
}

let testCases = [
  "3[a]2[bc]",
  "3[a2[c]]",
  "2[abc]3[cd]ef"
]

testCases.forEach(t => console.log(decodeString(t)))