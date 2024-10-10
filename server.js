import { app} from "./index.js";
import { config } from "dotenv";

config()

const PORT = process.env.PORT
console.log(process.env)

//starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });