import express from "express";
import { userSignin,userSignup,getAllUser } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.route('/signup').post(userSignup)
userRouter.route('/signin').post(userSignin)
userRouter.route('/').get(getAllUser)

export default userRouter