import express from "express";
import { Router as movieRouter } from "./routes/route.js";
// import logger from "./middleware/logger.js";
import { requestedAt } from "./middleware/requestedAt.js";
// import morgan from "morgan";
import fs from 'fs'

const data = fs.readFileSync('./template/greeting.html', 'utf-8')

const app = express();
const PORT = 3500;


//express middleware that enable us to work with json file
app.use(express.json());
// app.use(logger)
// app.use(morgan('tiny'))
app.use(requestedAt)
app.use(express.static('./template'))

//default route
app.get("/", (req, res) => {
  res.status(200).send(data);
});


app.use('/api/movies', movieRouter)  


export {
  app,
  PORT
}