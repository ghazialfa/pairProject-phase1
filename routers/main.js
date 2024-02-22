"use strict";
const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/login");
});

router.use("/login");
router.use("/posts");
router.use("/posts/create");
// router.use("/profile");
router.use("/user/:userId");
router.use("/users/:userId/profile/:profileId");
router.use("/users/:userId/profile/add");
router.post("/users/:userId/profile/add");
router.use("/users/:userId/profile/:profileId/edit");
router.post("/users/:userId/profile/:profileId/edit");

module.exports = router;
