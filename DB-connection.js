require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.DB_URI;

const connectDB = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
