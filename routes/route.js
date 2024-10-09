import {
  createMovie,
  deleteMovie,
  updateMovie,
  getMovie,
  getAllMovies,
} from "../controllers/movieController.js";
import express from "express";
import param from "../middleware/param.js";



//defining the router from express
const Router = express.Router();

Router.route("/").get(getAllMovies).post(createMovie);

Router.param('id', param)

Router.route("/:id").patch(updateMovie).delete(deleteMovie).get(getMovie);

export { Router };
