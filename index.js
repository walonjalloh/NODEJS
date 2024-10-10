import express from "express";
import { movieRouter } from "./routes/movieRoute.js";
import userRouter from "./routes/userRoute.js";
import connectDB from "./configs/mongoDB.js";
import fs from 'fs'

const data = fs.readFileSync('./template/greeting.html', 'utf-8')

const app = express();
const PORT = 3500;

connectDB()


//express middleware that enable us to work with json file
app.use(express.json());
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