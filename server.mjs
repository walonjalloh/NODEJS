//creating my fisrt server
import http from 'http'
import fs from 'fs'

//reading a file 
const html = fs.readFileSync('./template/hello.html','utf-8')

//creating the server
const app =  http.createServer((req,res) => {
    res.end(html)
    console.log('A new request recieved')
})


//starting the server
const PORT = 3500
app.listen(PORT, () => {
    console.log(`Server is running on port:  ${PORT}`)
})