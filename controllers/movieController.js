// import fs from "fs";
// const data = JSON.parse(fs.readFileSync("./data/movie.json", "utf-8"));
import Movie from "../models/movieSchema.js";
import User from "../models/userSchema.js";

const getAllMovies = async (req, res) => {
  try {
    const movie = await Movie.find({});
    if (movie.length >= 0 || !movie) {
      return res.status(404).json({ message: "No movies found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const getMovie = async(req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById({id})
    if(!movie){
      return res.status(404).json({message:'Invalid movie id'})
    }
    res.status(200).json(movie)
  }catch(error){
    res.status(400).json({message:error})
  }
};

const updateMovie = (req, res) => {
  const { id } = req.params;
  const newMovie = data.find((el) => el.id === Number(id));
  const index = data.indexOf(newMovie);

  Object.assign(newMovie, req.body);
  data[index] = newMovie;

  fs.writeFile("./data/movie.json", JSON.stringify(data), (err) => {
    res.status(200).json({
      status: "sucess",
      data: {
        movie: newMovie,
      },
    });
  });
};

const deleteMovie = async(req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByIdAndDelete({id})
    if(!movie){
      return res.status(404).json({message:"invalid movie Id"})
    }
    res.status(200).json({message:'movie delete'})
  }catch(error){
    res.status(400).json({message:"error deleting movie"})
  }
};

const createMovie = async(req, res) => {
  const { userId } = req.params
  const { name, yearrelease, duration }  = req.body
  try {
    const user = User.findById({ userId })
    if(!user){
      return res.status(404).json({message:"Invalid user id"})
    }

    if(!name || !yearrelease || !duration){
      return res.status(400).json({message:"All fields are required"})
    }

    const movieExist = await Movie.findOne({name})
    if(movieExist){
      return res.status(400).json({message:'movie all ready exist'})
    }

    const movie = new Movie({
      name,
      yearrelease,
      duration
    })
    const savedMovie =  await movie.save()


    user.movie.push(savedMovie._id)
    await user.save()

  
    res.status(200).json(savedMovie)
  }catch(error){
    res.status(400).json({message:'Error adding movie'})
  }
};

export { getMovie, getAllMovies, deleteMovie, updateMovie, createMovie };
