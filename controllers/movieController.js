import fs from "fs";
const data = JSON.parse(fs.readFileSync("./data/movie.json", "utf-8"));

const getAllMovies = (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      movie: data,
    },
  });
};

const getMovie = (req, res) => {
  const { id } = req.params;
  const newMovie = data.find(el => el.id === Number(id))
  res.status(200).json({
    status: "sucess",
    requestedAt: req.requestedAt,
    data: {
      movie: newMovie,
    },
  });
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

const deleteMovie = (req, res) => {
  const { id } = req.params;
  const newMovie = data.find((el) => el.id === Number(id));

  const index = data.indexOf(newMovie);
  data.splice(index, 1);

  fs.writeFile("./data/movie.json", JSON.stringify(data), (error) => {
    res.status(204).json({
      status: "sucess",
      data: {
        movie: null,
      },
    });
  });
};

const createMovie = (req, res) => {
  console.log(req.body);
  const newId = data[data.length - 1].id + 1;

  const newMovie = Object.assign({ id: newId }, req.body);

  data.push(newMovie);

  fs.writeFile("./data/movie.json", JSON.stringify(data), (error) => {
    res.status(201).json({
      status: "sucess",
      data: {
        movie: newMovie,
      },
    });
  });
};

export { getMovie, getAllMovies, deleteMovie, updateMovie, createMovie };
