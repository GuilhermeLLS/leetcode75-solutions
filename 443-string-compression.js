/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let pointer = 0
  let s = ''
  while (pointer < chars.length) {
    const compChar = chars[pointer]
    let innerPointer = pointer + 1
    let charCounter = 1
    while (innerPointer < chars.length) {
      if (chars[innerPointer] === compChar) {
        charCounter++
      }
      innerPointer++
    }
    innerPointer = 0
    // pointer must point to the next new character
    pointer += charCounter
    if (charCounter === 1) {
      s += compChar
    } else {
      s += (compChar + charCounter.toString())
    }
    charCounter = 0
  }
  chars = s.split('')
  return chars
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))