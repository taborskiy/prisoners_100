const generateRandomNumber = arrLength => Math.floor(Math.random() * arrLength)

const randomStrategies = (numbers, prisoners) => {
  // let isNumberEqual = false;
  const prisonerResult = [];
  let prisoner = 1;
  let attempt = 1;
  console.log(`
    -----------------------------------------------------

    --------- RANDOM STRATEGIES START TEST --------------

    -----------------------------------------------------
  `)
  while(prisoner <= prisoners.length && !prisonerResult.some(({isFindTheirNumber}) => !isFindTheirNumber)) {

    let isNumberEqual = false;
    const arrayOfCheckedNumbers = [];
    console.log(`prisoners ${prisoner} enter to room with boxes`)
    for(let i = 0; i < numbers.length/2; i++) {
      let randomNumber = generateRandomNumber(numbers.length);
      while(arrayOfCheckedNumbers.includes(randomNumber)) {
        randomNumber = generateRandomNumber(numbers.length);
      }
      arrayOfCheckedNumbers.push(randomNumber)
      const numberOnBox = numbers[randomNumber];

      console.log(`
        prisoners ${prisoner} go to box with number - ${randomNumber}
        in box he find number - ${numberOnBox}
        attempt number - ${i + 1}
      `)

      if(numberOnBox === prisoner) {
        isNumberEqual = true
        attempt = i + 1
        console.log(`
        ------------- prisoner ${prisoner} success find number , attempt ${i} --------------------
        `)
      }
    }

    prisonerResult.push({
      prisonerNumber: prisoner,
      isFindTheirNumber: isNumberEqual,
      attempt
    })
    ++prisoner
    attempt = 1
  };

  return prisonerResult
}

module.exports = {
  randomStrategies
}
