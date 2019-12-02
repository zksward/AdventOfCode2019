const fs = require('fs')

let data = fs.readFileSync("input").toString().split(',').map(n => parseInt(n))

//let tests = fs.readFileSync("tests").toString().split('\n').map(lines => lines.split(',').map(n => parseInt(n)))

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
            console.log(program)
            return
    }

    compute(program, head + 4)
}

compute(data, 0)

// for (let i = 0; i < tests.length; i++) {
//     compute(tests[i], 0)
// }