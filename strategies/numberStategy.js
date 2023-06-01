const numberStrategies = (numbers, prisoners) => {

  const prisonerResult = [];
  let prisoner = 1;
  let attempt = 1;
  console.log(`
    -----------------------------------------------------

    --------- NUMBER STRATEGIES START TEST --------------

    -----------------------------------------------------
  `)
  while(prisoner <= prisoners.length && !prisonerResult.some(({isFindTheirNumber}) => !isFindTheirNumber)) {

    let isNumberEqual = false;
    let numberFromBox = prisoner;

    console.log(`prisoners ${prisoner} enter to room with boxes`)
    for(let i = 0; i < numbers.length/2; i++) {
      
      const numberOnBox = numbers[numberFromBox - 1]

      console.log(`
        prisoners ${prisoner} go to box with number - ${numberFromBox}
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
      numberFromBox = numberOnBox
    }

    prisonerResult.push({
      prisonerNumber: prisoner,
      isFindTheirNumber: isNumberEqual,
      attempt
    })
    ++prisoner
    attempt = 1
    numberFromBox = null
  };

  return prisonerResult
}

module.exports = {
  numberStrategies
}
