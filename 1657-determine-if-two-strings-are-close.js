/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false

  const mapOne = new Map()
  const mapTwo = new Map()

  for (const letter of word1) {
    mapOne.set(letter, (mapOne.get(letter) ?? 0) + 1)
  }

  for (const letter of word2) {
    mapTwo.set(letter, (mapTwo.get(letter) ?? 0) + 1)
  }

  let oneLettersValues = []
  for (const [k, v] of mapOne.entries()) {
    if (!mapTwo.has(k)) return false
    oneLettersValues.push(v)
  }

  oneLettersValues.sort((a, b) => a - b)

  let twoLettersValues = Array.from(mapTwo.values()).sort((a, b) => a - b)

  if (oneLettersValues.length !== twoLettersValues.length) return false

  for (let i = 0; i < oneLettersValues.length; i++) {
    if (oneLettersValues[i] !== twoLettersValues[i]) return false

  }
  return true
}

let testCases = [
  ["abc", "bca"],
  ["a", "aa"],
  ["cabbba", "abbccc"]
]

testCases.forEach(t => console.log(closeStrings(t[0], t[1])))