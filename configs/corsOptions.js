const allowedOrigin = ['http://localhost:5173', 'http://localhost:3000']

const corsOptions = {
    origin: (origin,callback) => {
        console.log(origin)
        if(allowedOrigin.includes(origin) || !origin){
            callback(null,true)
        }else{
            callback(new Error('Not Allowed by CORS'))
        }
    },
    methods: ['POST','GET','PUT','DELETE'],
    allowedHeader: ['Content-Types', 'Authorization'],
    credential: true
}

export default corsOptions