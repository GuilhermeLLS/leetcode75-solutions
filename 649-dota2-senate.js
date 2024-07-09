/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let voteq = senate.split('')
  let radiantQ = [], direQ = []
  let offset = voteq.length

  voteq.forEach((v, i) => v === 'R' ? radiantQ.push(i) : direQ.push(i))
  while (radiantQ.length !== 0 && direQ.length !== 0) {
    let d = direQ.shift()
    let r = radiantQ.shift()
    if(d < r) {
      direQ.push(d + offset)
    } else {
      radiantQ.push(r + offset)
    }
  }
  return radiantQ.length === 0 ? 'Dire' : 'Radiant'
}

  let testCases = [
    "RD",
    "RDD",
    "DRRDRDRDRDDRDRDR"
  ]

  testCases.forEach(t => console.log(predictPartyVictory(t)))