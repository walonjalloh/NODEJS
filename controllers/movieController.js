import Movie from "../models/movieSchema.js";
import User from "../models/userSchema.js";

const getAllMovies = async (req, res,next) => {
  try {
    const movies = await Movie.find({});
    if (!movies || movies.length === 0) {
      return res.status(200).json({ message: "No movies found" });
    }
    res.status(200).json(movies);
    next()
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getMovie = async (req, res,next) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Invalid movie ID" });
    }
    res.status(200).json(movie);
    next()
  } catch (error) {
    console.error("Error getting movie:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateMovie = async (req, res,next) => {
  const { id } = req.params;
  const { name, yearrelease, duration } = req.body;

  try {
    const movie = await Movie.findByIdAndUpdate(id, { name, yearrelease, duration }, { new: true });
    if (!movie) {
      return res.status(404).json({ message: "Invalid movie ID" });
    }
    res.status(200).json({ message: "Movie updated successfully", movie });
    next()
  } catch (error) {
    console.error("Error updating movie:", error);
    res.status(400).json({ message: "Error updating movie" });
  }
};

const deleteMovie = async (req, res,next) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) {
      return res.status(404).json({ message: "Invalid movie ID" });
    }
    res.status(200).json({ message: "Movie deleted successfully" });
    next()
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createMovie = async (req, res,next) => {
  try {
    const { userId, name, yearrelease, duration } = req.body;

    if (!userId || !name || !yearrelease || !duration) {
      return res.status(400).json({message:"All fields required"})
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "Invalid user ID" });
    }

    const existingMovie = await Movie.findOne({ name });
    if (existingMovie) {
      return res.status(400).json({ message: "Movie already exists" });
    }

    const newMovie = new Movie({ name, yearrelease, duration });

    const savedMovie = await newMovie.save();

    user.movies.push(savedMovie._id);
    await user.save();

    res.status(201).json(savedMovie);
    next()
  } catch (error) {
    console.error("Error creating movie:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getAllMovies, getMovie, updateMovie, deleteMovie, createMovie };