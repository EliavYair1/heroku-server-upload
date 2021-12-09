const express = require("express");
const app = express();
const PORT = 4000;
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
/*  CONNeCTION TO MONGO */
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDb"))
  .catch((e) => console.log(e, "error in connection"));
// mongoose
//   .connect("mongodb://localhost/level_up", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("connected to mongoDb"))
//   .catch((e) => console.log(e, "error in connection"));
if (process.env.NODE_ENV === "production") {
  //set static folder
  //all the javascript and css files will be read and served from this folder
  app.use(express.static("../Lug-FrontEnd/build"));
  //index.html for all pages routes
  app.get("+", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Lug-FrontEnd", "build", "index.html"));
  });
}


app.use(require("morgan")("dev"));
app.use(express.json());
app.use(require("cors")());
//a route to create token for a registered user
app.use("/levelup/auth", auth);
//route for user (crud)
app.use("/levelup/users", usersRoute);

/* LISTEN TO PORT */
app.listen(process.env.PORT || 4000, () => console.log(`server is running `));