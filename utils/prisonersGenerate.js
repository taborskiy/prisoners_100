const getneratePrisoners = (prisonersCount = 100) => {
  return Array.from({ length: prisonersCount }, (v, k) => k + 1);
}

module.exports = {
  getneratePrisoners
}