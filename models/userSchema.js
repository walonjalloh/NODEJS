import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname : {
        type:String,
        required:true,
    },
    username :{
        type:String,
        required:true,
        unqiue:true
    },
    password: {
        type:String,
        required:true,
        minlength:8
    },
    movie: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    }]
})

const User = mongoose.model('User',userSchema)

export default User