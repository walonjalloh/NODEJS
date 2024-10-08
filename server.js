//creating my fisrt server

//core modules
const http = require('http')
const fs = require('fs')
// const url = require('url')
// const events = require('events')


// //user defined modules
// const replaceHtml = require('./modules/replaceHtml')
// const user = require('./modules/user')



// //reading a file 
// const html = fs.readFileSync('./template/hello.html','utf-8')
// let products = JSON.parse(fs.readFileSync('./data/product.json', 'utf-8'))
// const productHtml = fs.readFileSync('./template/product.html', 'utf-8')
// const productDetailHtml = fs.readFileSync('./template/product-details.html', 'utf-8')




// // //creating the server
// // const app =  http.createServer((request,response) => {
// //     let {query, pathname:path} = url.parse(request.url, true)
// //     console.log(query,path)
// //     // let path = request.url

// //     //checking route
// //     if(path === '/' || path.toLocaleLowerCase() === '/home'){
// //         //setting up the header content
// //         response.writeHead(200, {
// //             'Content-Type': 'text/html'
// //         })
// //         response.end(html.replace('{{content}}', 'HomePage'))
// //     }else if(path.toLocaleLowerCase() === '/about'){
// //         response.writeHead(200,{
// //             "Content-Type":'text/html'
// //         })
// //         response.end(html.replace('{{content}}', 'AboutPage'))
// //     }else if (path.toLocaleLowerCase() === '/contact'){
// //         response.writeHead(200,{
// //             "Content-Type":"text/html"
// //         })
// //         response.end(html.replace('{{content}}', 'ContactPage'))
// //     }else if(path.toLocaleLowerCase() === '/product'){
// //         let productHtmlArry = products.map(prod => {
// //             return replaceHtml(productHtml,prod)
// //         })
// //         if(!query.id){
// //             response.writeHead(200, {
// //                 "Content-Type":"text/html"
// //             })
// //             response.end(html.replace('{{content}}', productHtmlArry.join(',')))
// //         }else {
// //             //basically we tried to filter the product file by using the query from the url
// //             const prod = products[query.id]
// //             const details = replaceHtml(productDetailHtml, prod )
// //             response.end(html.replace('{{content}}', details))
// //         }
// //     }
// //     else{
// //         response.writeHead(404,{
// //             "Content-Type":"text/html"
// //         })
// //         response.end(html.replace('{{content}}', 'Error 404: Page not found'))
// //     }
// // })




// // //starting the server
// // const PORT = 3500
// // app.listen(PORT, () => {
// //     console.log(`Server is running on port:${PORT}`)
// // })



const server = http.createServer()

// server.on('request', (request,response) => {
//     let {query, pathname:path} = url.parse(request.url, true)
//     console.log(query,path)
//     // let path = request.url

//     //checking route
//     if(path === '/' || path.toLocaleLowerCase() === '/home'){
//         //setting up the header content
//         response.writeHead(200, {
//             'Content-Type': 'text/html'
//         })
//         response.end(html.replace('{{content}}', 'HomePage'))
//     }else if(path.toLocaleLowerCase() === '/about'){
//         response.writeHead(200,{
//             "Content-Type":'text/html'
//         })
//         response.end(html.replace('{{content}}', 'AboutPage'))
//     }else if (path.toLocaleLowerCase() === '/contact'){
//         response.writeHead(200,{
//             "Content-Type":"text/html"
//         })
//         response.end(html.replace('{{content}}', 'ContactPage'))
//     }else if(path.toLocaleLowerCase() === '/product'){
//         let productHtmlArry = products.map(prod => {
//             return replaceHtml(productHtml,prod)
//         })
//         if(!query.id){
//             response.writeHead(200, {
//                 "Content-Type":"text/html"
//             })
//             response.end(html.replace('{{content}}', productHtmlArry.join(',')))
//         }else {
//             //basically we tried to filter the product file by using the query from the url
//             const prod = products[query.id]
//             const details = replaceHtml(productDetailHtml, prod )
//             response.end(html.replace('{{content}}', details))
//         }
//     }
//     else{
//         response.writeHead(404,{
//             "Content-Type":"text/html"
//         })
//         response.end(html.replace('{{content}}', 'Error 404: Page not found'))
//     }
// })

const PORT = 3500

server.listen(PORT,() => {
    console.log(`Server running on port:${PORT}`)
})

// let myEmitter = new user()



// myEmitter.on('userCreated', (id, name) => {
//     console.log(`new user name ${name} with id ${id}`)
// })

// myEmitter.on('userCreated', (id,name) => {
//     console.log(`user  ${name} and id ${id} added to database`)
// })

// myEmitter.emit('userCreated',101, 'Walon')

//solution1
// server.on('request', (req,res) => {
//     fs.readFile('./files/largeFile.txt', (err,data) => {
//         if(err){
//             res.end('Error occured')
//             return;
//         }
//         res.end(data)
//     })
// })


//solution 2
server.on('request', (req,res) => {
    let rs = fs.createReadStream('./files/largeFile.txt')

    rs.on('data', (chunk) => {
        res.write(chunk)
    })

    rs.on('end', ()=> {
        res.end()
    })

    rs.on('error',(error) => {
        res.end(error.message)
    })
   
})