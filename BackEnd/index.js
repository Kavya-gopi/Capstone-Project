const connectionDB = require("./util/database");
const express = require("express");
const cors = require("cors");
const user_routes = require("./routes/user_routes");
const prod_up_routes=require("./routes/prod_up_routes");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const start = async () => {
  try {
    await connectionDB(process.env.MONGO_LOCAL_URL);
    console.log("Connected");
    app.listen(PORT, () => {
      console.log("Server is listening to port : " + PORT);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
app.use("/user", user_routes);
app.use("/product",prod_up_routes);
