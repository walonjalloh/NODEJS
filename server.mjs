//creating my fisrt server
import http from 'http'

//creating the server
const app =  http.createServer((req,res) => {
    res.end('Hello wORLD')
    console.log('A new request recieved')
})


//starting the server
const PORT = 3500
app.listen(PORT, () => {
    console.log(`Server is running on port:  ${PORT}`)
})