import express from "express";
import cors from 'cors'
import { movieRouter } from "./routes/movieRoute.js";
import userRouter from "./routes/userRoute.js";
import connectDB from './configs/mongoDB.js'
import { config } from "dotenv";
import corsOptions from "./configs/corsOptions.js";
import fs from 'fs'
import cookieParser from "cookie-parser";

const data = fs.readFileSync('./template/greeting.html', 'utf-8')

config()

const app = express();
const PORT = 3500;

connectDB()


//express middleware that enable us to work with json file
app.use(cookieParser())
app.use(express.json());
app.use(cors(corsOptions))
app.use(express.static('./template'))

//default route
app.get("/", (req, res) => {
  res.status(200).send(data);
});

//movie routes
app.use('/api/movies', movieRouter)

//user route
app.use('/api/user',userRouter)
  


export {
  app,
  PORT
}