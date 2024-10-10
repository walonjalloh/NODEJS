import express from "express";
import { userSignin,userSignup } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.route('/signup').post(userSignup)
userRouter.route('/signin').post(userSignin)

export default userRouter