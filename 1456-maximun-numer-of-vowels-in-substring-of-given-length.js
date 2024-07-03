/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let ss = s.split('')
  let left = 0
  let right = 0
  let max = 0
  let window = ''
  let interval = 0
  let lasVowelAt = 0
  let vowels = new Set(['a', 'e', 'o', 'i', 'u'])
  while (right < k) {
    window += ss[right]
    if (vowels.has(ss[right])) {
      interval++
      lasVowelAt = right
    }
    right++
  }
  max = interval
  while (left + k < ss.length) {
    window = window.slice(1) + ss[right]
    if(vowels.has(ss[left+1])) {
      interval++
    } else {
      interval--
    }
    if(vowels.has(ss[right])) {
      interval++
    } else {
      interval--
    }
    console.log({window, interval, left})
    // interval = window.match(/[aeiou]/gi)?.length ?? 0;
    max = Math.max(max, interval)
    left++
    right++
  }

  return max

}

let testCases = [
  ["abciiidef", 3],
  // ["aeiou", 2],
  // ["leetcode", 3],
]

testCases.forEach(t => console.log(maxVowels(t[0], t[1])))