/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let successCounter = 0
  for(let i = 0; i < n; i++) {
      for (let j = 0; j < flowerbed.length; j++) {
          let isLeftZero = j !== 0 ? flowerbed[j-1] === 0 : true
          let isRightZero = j !== flowerbed.length -1 ? flowerbed[j+1] === 0 : true
          let isElemOne = flowerbed[j] !== 1
          console.log({isElemOne, isLeftZero, isRightZero, i})
          if(isLeftZero && isRightZero && isElemOne) {
              flowerbed[j] = 1
              successCounter++
              break
          }
      }
  }
  return successCounter === n
};

console.log(canPlaceFlowers([0,0,0,0,0], 2))