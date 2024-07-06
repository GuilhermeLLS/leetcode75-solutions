/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().replace(/\s{2,}/g, ' ').split(" ").reverse().join(" ")
};

// console.log(reverseWords("a good   example"))

console.log(reverseWords("  Bob    Loves  Alice   "))

