require('dotenv').config();
const {NUMBER_OF_PRISONRS, RANDOM_ARRAY_LENGTH, NUMBER_TESTING} = process.env;

const {generateArrayOfRandomNumbers} = require('./utils/generateArrayOfRandomNumbers');
const arrayOfPrisoners = require('./utils/prisonersGenerate').getneratePrisoners(NUMBER_OF_PRISONRS);
const {randomStrategies} = require('./strategies/randomStategy')

console.log('START OF TESTING', NUMBER_OF_PRISONRS)
const results = [];
const prepareViewResult = {};

for(let i = 0; i < NUMBER_TESTING; i++) {
  const result = randomStrategies(generateArrayOfRandomNumbers(RANDOM_ARRAY_LENGTH), arrayOfPrisoners)
  results.push(result)
}

results.forEach(result => {
  const numderOfAttent = prepareViewResult[result.length];
  if (numderOfAttent) {
    prepareViewResult[result.length] = numderOfAttent + 1
  } else {
    prepareViewResult[result.length] = 1
  }
})
console.log('END OF TESTING, STATICTICS RESULT', prepareViewResult)
