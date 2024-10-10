import mongoose from "mongoose";

const connectDB = async() => {
    console.log('MongoDB connection with retry')
    try {
        await mongoose.connect(process.env.DATABASE_URI,{

        })
        console.log(`Connect to MongoDB`)
    }catch(error){
        console.log(`Connection to MongoDB failed ${error}`)
        setTimeout(()=>{
            connectDB()
        },5000)
    }
}

export default connectDB