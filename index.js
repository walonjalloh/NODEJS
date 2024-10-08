import express from "express";
import { createMovie,getAMovie,getAllMovies,deleteMovie,updateMovie } from "./routes/route.js";


const app = express();
const PORT = 3500;

//express middleware that enable us to work with json file
app.use(express.json());


//default route
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world", status: 200 });
});

app.route("/api/movies").get(getAllMovies).post(createMovie);

app
  .route("/api/movies/:id")
  .patch(updateMovie)
  .delete(deleteMovie)
  .get(getAMovie);

//starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
