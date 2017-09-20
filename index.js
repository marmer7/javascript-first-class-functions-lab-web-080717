function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return num => {return multiplierValue*num}
}

doubler = createMultiplier(2)
tripler = createMultiplier(3)

function multiplier(n1, n2) {
  return (n1 * n2)
}

doublerWithBind = multiplier.bind(null, 2)
triplerWithBind = multiplier.bind(null, 3)
