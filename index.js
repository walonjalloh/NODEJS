//a module to get user input
const input = require('readline');

//setting the interface to get input and output
const user = input.createInterface({
    input:process.stdin,
    output:process.stdout
})

//we make use of the interface by get the user to enter his name
user.question('please enter your name:', (name) => {
    console.log(`Your name is ${name}`)
    user.close();
})

user.on('close', () => {
    console.log(`Interface closed`)
    process.exit(0)
})

const sayHello = () => {
    const user = input.createInterface({
        input:process.stdin,
        output:process.stdout
    })

    user.question('Enter your name:\n', (value) => {
        console.log(`Hello ${value}. Welcome to node js tutorial`)
        user.close()
    })
}

sayHello()