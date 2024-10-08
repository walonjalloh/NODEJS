import express from 'express'

const app = express()
const PORT = 3500

app.use(express.json())


app.get('/',(req,res) => {
    res.send('<p>hello world</p>')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})