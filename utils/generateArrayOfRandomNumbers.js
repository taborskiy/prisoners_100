const generateArrayOfRandomNumbers = (arrLength = 100) => {
  const randomNumbers = [];

  while (randomNumbers.length < arrLength) {
    const randomNumber = Math.floor(Math.random() * arrLength) + 1;
    
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers
}

module.exports = {
  generateArrayOfRandomNumbers
}
