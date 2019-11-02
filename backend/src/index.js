const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose
  .connect("mongodb://admin:admin123@ds153096.mlab.com:53096/heroku_dfj4rw89", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("[DATABASE] Conexão estabelecida com sucesso");
  });

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

server.listen(3333);
