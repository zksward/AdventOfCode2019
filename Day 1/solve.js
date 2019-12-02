const fs = require('fs')

const data = fs.readFileSync('input').toString().split('\n')

const result = data.reduce(
    (sum, mass) =>
        mass ? sum + Math.floor(mass / 3) - 2 : sum
    , 0)

console.log(result)