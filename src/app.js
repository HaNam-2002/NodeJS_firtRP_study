// xài thư viện
const express = require("express");
const router = express.Router();
const app = express();

// config db
require("./configs/config.mongodb");

// middleware -> phần xử lý trung gian giữa request và response
app.use(express.json()); // express version 4 cài sẵn bodyparser
app.use(
  express.urlencoded({
    extended: true,
  })
);

// route
app.use("/", require("./routes/index"));

// handler error

module.exports = app;
