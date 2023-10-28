const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const dishes = require("./router/dishRouter");
const userRoutes = require("./router/userRouter");

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", dishes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});