import fs from 'fs'
const data = JSON.parse(fs.readFileSync('./data/movie.json','utf-8'))

const param = (req, res, next, value) => {
  console.log(`Movie Id is ${value}`);
  const newMovie = data.find((el) => el.id === Number(value));

  if (!newMovie) {
    return res.status(404).json({
      status: "fail",
      message: "Movies ID is invalid",
    });
  }
  next()
};

export default param