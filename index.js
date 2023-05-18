const arrayOfRandomNumbers = require('./utils/arrayGenerate').arrayGenerate();

console.log('TEST, arrayOfRandomNumbers', arrayOfRandomNumbers, [...arrayOfRandomNumbers].sort((a,b) => a - b))