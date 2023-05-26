const {generateArrayOfRandomNumbers} = require('./utils/generateArrayOfRandomNumbers');
const arrayOfPrisoners = require('./utils/prisonersGenerate').getneratePrisoners();
const {randomStrategies} = require('./strategies/randomStategy')

console.log('START LOG WITH ARRAY, arrayOfRandomNumbers')
const results = [];
const prepareViewResult = {};

for(let i = 0; i < 100000000; i++) {
  const result = randomStrategies(generateArrayOfRandomNumbers(), arrayOfPrisoners)
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
