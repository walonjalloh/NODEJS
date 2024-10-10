import mongoose from "mongoose";

const connectDB = async() => {
    console.log("MongoDB connection with retry")
    try{
        mongoose.connect(process.env.DATABASE_URI, {

        })
        console.log('Connected to MongoDB')
    }catch(error){
        console.log('connection to mongoDB failed')
        setTimeout(() => {
            connectDB()
        }, 5000);
    }
}

export default connectDB