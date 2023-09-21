const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("connect success");
  })
  .catch((err) => {
    console.log("connect err");
  });
