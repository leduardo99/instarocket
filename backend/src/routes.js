const express = require("express");
const multer = require("multer");
const uploadConfigs = require("./config/upload");
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");

const routes = new express.Router();
const upload = multer(uploadConfigs);

routes.post("/posts", upload.single("image"), PostController.store);
routes.get("/posts", PostController.index);

routes.post("/posts/:id/like", LikeController.store);
module.exports = routes;
