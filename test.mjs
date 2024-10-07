import readline from 'readline'
import fs from 'fs'

const line = `Walon is sexy.\n Walon is a genius.\n Walon is good, infact he is super great.`
const writeData = fs.writeFile('./files/output.txt', line, () => {
    console.log('File has being written')
})

const input = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const value = input.question('Enter a value:\n', (value) => {
    console.log(value)
    input.close()
    const numberValue = Number(value)
const answer = numberValue * 2
console.log(answer)
})

console.log(fs)



