//creating my fisrt server
const http = require('http')
const fs = require('fs')
const url = require('url')

//reading a file 
const html = fs.readFileSync('./template/hello.html','utf-8')
let product = JSON.parse(fs.readFileSync('./data/product.json', 'utf-8'))
const productHtml = fs.readFileSync('./template/product.html', 'utf-8')

let productHtmlArry = product.map(prod => {
    let output = productHtml.replace('{{phonename}}', prod.phonename)
    output = output.replace('{{price}}', prod.price)
    output = output.replace('{{size}}', prod.size)
    output = output.replace('{{rom}}', prod.rom)
    output= output.replace('{{ram}}',prod.ram)
    output = output.replace('{{camerapixel}}',prod.camerapixel)
    output = output.replace('{{id}}', prod.id)

    return output
})

//creating the server
const app =  http.createServer((request,response) => {
    let {query, pathname:path} = url.parse(request.url, true)
    console.log(query,path)
    // let path = request.url

    //checking route
    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        //setting up the header content
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html.replace('{{content}}', 'HomePage'))
    }else if(path.toLocaleLowerCase() === '/about'){
        response.writeHead(200,{
            "Content-Type":'text/html'
        })
        response.end(html.replace('{{content}}', 'AboutPage'))
    }else if (path.toLocaleLowerCase() === '/contact'){
        response.writeHead(200,{
            "Content-Type":"text/html"
        })
        response.end(html.replace('{{content}}', 'ContactPage'))
    }else if(path.toLocaleLowerCase() === '/product'){
        if(!query.id){
            response.writeHead(200, {
                "Content-Type":"text/html"
            })
            response.end(html.replace('{{content}}', productHtmlArry.join(',')))
        }else {
            response.end(`This is the product page of item with id:${query.id}`)
        }
    }
    else{
        response.writeHead(404,{
            "Content-Type":"text/html"
        })
        response.end(html.replace('{{content}}', 'Error 404: Page not found'))
    }
})


//starting the server
const PORT = 3500
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})
