const express = require("express");
const app = express();

const mongoose = require("mongoose");
const usersRoute = require("./routes/users");
const auth = require("./routes/auth");
const {
  patch
} = require("./routes/users");
const {
  path
} = require("express/lib/application");
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://EliavYair:Yy355312@levelupcluster.rxzan.mongodb.net/LevelUpGamingDB?retryWrites=true&w=majority"
/*  CONNeCTION TO MONGO */
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDb"))
  .catch((e) => console.log(e, "error in connection"));


app.use(require("morgan")("dev"));
app.use(express.json());
app.use(require("cors")());
//a route to create token for a registered user
app.use("/levelup/auth", auth);
//route for user (crud)
app.use("/levelup/users", usersRoute)

/* LISTENING TO PORT */
app.listen(process.env.PORT || 4000, () => console.log(`server is running `));