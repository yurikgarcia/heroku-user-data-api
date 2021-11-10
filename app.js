
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const { getOneUserById, getAllUsers } = require("./db_controllers/controllers");

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.get("/users", (req, res) => {
  getAllUsers()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(403).send(err));
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  getOneUserById(id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(403).send(err));
});

module.exports = app;
