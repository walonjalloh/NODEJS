import express from "express";
import { Router as movieRouter } from "./routes/route.js";
import logger from "./middleware/logger.js";
import { requestedAt } from "./middleware/requestedAt.js";
import morgan from "morgan";

const app = express();
const PORT = 3500;


//express middleware that enable us to work with json file
app.use(express.json());
app.use(logger)
app.use(morgan('tiny'))
app.use(requestedAt)


//default route
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world", status: 200 });
});


app.use('/api/movies', movieRouter)  


export {
  app
}