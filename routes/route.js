import {
  createMovie,
  deleteMovie,
  updateMovie,
  getAMovie,
  getAllMovies,
} from "../controllers/movieController.js";
import express from "express";



//defining the router from express
const Router = express.Router();

Router.route("/").get(getAllMovies).post(createMovie);

Router.route("/:id").patch(updateMovie).delete(deleteMovie).get(getAMovie);

export { Router };
