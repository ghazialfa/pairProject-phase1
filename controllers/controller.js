"use strict";

const { User, Post, sequelize, Sequelize } = require("../models");

class Controller {
  static async login(req, res) {
    res.render("login");
  }

  static async profile(req, res) {
    res.render("profileForm");
  }

  static async addProfile(req, res) {
    const { userId } = req.params;
    try {
      const profile = await Profile.findByPk();
      res.render("profileForm", { profile });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async post(req, res) {
    try {
      // const posts = await Post.findAll();
      const posts = await Post.findAll({ include: "User" });
      // console.log(posts);
      res.send(posts);
      // res.render("post", { posts });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async createPost(req, res) {
    try {
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = Controller;
