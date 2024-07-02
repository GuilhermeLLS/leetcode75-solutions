/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 1) return t.includes(s)
  let left = 0
  let right = t.length - 1
  let lt = s.charAt(0)
  let rt = s.charAt(s.length - 1)
  while (left < right) {
    if (t[left] === lt) {
      s = s.slice(1)
      if (s === '') return true
      lt = s.charAt(0)
    }
    if (t[right] === rt) {
      s = s.slice(0, -1)
      if (s === '') return true
      rt = s.charAt(s.length - 1)
    }
    left++
    right--
  }

  return s === ''
}
console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
console.log(isSubsequence("b", "abc"))
console.log(isSubsequence("abbc", "ahbdc"))