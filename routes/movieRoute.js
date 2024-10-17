import {
  createMovie,
  deleteMovie,
  updateMovie,
  getMovie,
  getAllMovies,
} from "../controllers/movieController.js";
import express from "express";


//defining the router from express
const movieRouter = express.Router();

movieRouter.route("/").get(getAllMovies).post(createMovie);;


movieRouter.route("/:id").patch(updateMovie).delete(deleteMovie).get(getMovie)

export { movieRouter };
