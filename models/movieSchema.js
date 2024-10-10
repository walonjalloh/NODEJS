import mongoose from "mongoose";

const Schema = mongoose.Schema

const movieSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name : {
        type:String,
        required:true,
    },
    yearrelease :{
        type:String,
        required:true,
        unqiue:true
    },
    duration: {
        type:Number,
        required:true
    }
})

const Movie = mongoose.model('Movie',movieSchema)

export default Movie