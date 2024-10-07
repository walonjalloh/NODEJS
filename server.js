//creating my fisrt server
const http = require('http')
const fs = require('fs')

//reading a file 
const html = fs.readFileSync('./template/hello.html','utf-8')

//creating the server
const app =  http.createServer((request,response) => {
    let path = request.url

    //checking route
    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        response.end(html.replace('{{content}}', 'HomePage'))
    }else if(path.toLocaleLowerCase() === '/about'){
        response.end(html.replace('{{content}}', 'AboutPage'))
    }else if (path.toLocaleLowerCase() === '/contact'){
        response.end(html.replace('{{content}}', 'ContactPage'))
    }else{
        response.end(html.replace('{{content}}', 'Error 404: Page not found'))
    }
})


//starting the server
const PORT = 3500
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})
