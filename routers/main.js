"use strict";
const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.redirect("/login");
});

router.get("/login", Controller.login);
router.get("/posts", Controller.post);
router.get("/posts/create", Controller.createPost);
router.get("/profile", Controller.profile);
// router.use("/user/:userId");
// router.use("/users/:userId/profile/:profileId");
// router.use("/users/:userId/profile/add");
// router.post("/users/:userId/profile/add");
// router.use("/users/:userId/profile/:profileId/edit");
// router.post("/users/:userId/profile/:profileId/edit");

module.exports = router;
