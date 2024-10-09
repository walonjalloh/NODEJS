import { app } from "./index.js";

const PORT = 3500
//starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });