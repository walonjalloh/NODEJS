import {
  createMovie,
  deleteMovie,
  updateMovie,
  getMovie,
  getAllMovies,
} from "../controllers/movieController.js";
import express from "express";
import param from "../middleware/param.js";
import bodyChecker from "../middleware/bodyChecker.js";


//defining the router from express
const movieRouter = express.Router();

movieRouter.route("/").get(getAllMovies).post(bodyChecker, createMovie);

movieRouter.param('id', param)

movieRouter.route("/:id").patch(updateMovie).delete(deleteMovie).get(getMovie);

export { movieRouter };
