const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./DB-connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

connectDB();
