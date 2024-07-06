/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let res = s.split('')
  let isVolwelMap = {
    'a': true,
    'A': true,
    'e': true,
    'E': true,
    'i': true,
    'I': true,
    'o': true,
    'O': true,
    'u': true,
    'U': true,
      }
  let vowelsPositions = []

  for (let i = res.length; i >= 0; i--) {
    let letter = res[i];
    if (isVolwelMap[letter]) {
      vowelsPositions.push(i)
    }
  }

  console.log({ vowelsPositions })
  let result = ''
  if(!vowelsPositions.length) return s

  for (let i = 0; i < res.length; i++) {
    let letter = res[i];
    if (isVolwelMap[letter]) {
      let elem = res[vowelsPositions.shift()]
      console.log({ letter, elem })
      result += elem
    } else {
      result += letter
    }
  }
  return result

};

// console.log(reverseVowels("leetcode"))
// console.log(reverseVowels("ai"))
console.log(reverseVowels("aA"))