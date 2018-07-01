const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
//db
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("mongoDB is Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello!"));

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
