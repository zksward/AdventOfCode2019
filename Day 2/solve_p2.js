const fs = require('fs')

let data = fs.readFileSync("input").toString().split(',').map(n => parseInt(n))

const compute = (program, head) => {
    let position_i = program[head + 1]
    let position_j = program[head + 2]
    let position_k = program[head + 3]

    switch (program[head]) {
        case 1:
            program[position_k] = program[position_i] + program[position_j]
            break
        case 2:
            program[position_k] = program[position_i] * program[position_j]
            break
        case 99:
        default:
            return
    }

    compute(program, head + 4)
}

for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 60; j++) {
        let input = [...data]
        input[1] = i
        input[2] = j
        compute(input, 0)
        if (input[0] === 19690720) {
            console.log(`noun = ${i}, verb = ${j}, 100 * noun + verb = ${100 * i + j}`)
        }
    }
}