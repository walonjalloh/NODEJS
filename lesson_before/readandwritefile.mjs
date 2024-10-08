//module use to read and write file in javascript
import fs from 'fs'


const readFile  = fs.readFileSync('./files/input.txt', 'utf-8')
console.log(readFile)

const line = `Data read from the input.txt: ${readFile} \nDate created ${new Date()}`
const writeFile = fs.writeFileSync('./files/write.txt',line)
console.log(writeFile)