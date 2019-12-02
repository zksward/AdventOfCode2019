const fs = require('fs')

const calculateFuel = (mass) => {
    let fuel = Math.floor(mass / 3) - 2
    return fuel > 0 ? fuel + calculateFuel(fuel) : 0;
}

const data = fs.readFileSync('input').toString().split('\n')

const result = data.reduce(
    (sum, mass) =>
        mass ? sum + calculateFuel(mass) : sum
    , 0)

console.log(result)