import { app,PORT } from "./index.js";


//starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });