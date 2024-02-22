"use strict";

const { User, Post, Tag, Profile } = require("../models");
const bcrypt = require("bcryptjs");

class Controller {
  static login(req, res) {
    try {
      const { message } = req.query;
      res.render("login", { message });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
  static async validateLogin(req, res) {
    try {
      const { userName, password } = req.body;
      const user = await User.findOne({ where: { userName: userName } });
      if (user) {
        const isPassword = bcrypt.compareSync(password, user.password);
        if (isPassword) {
          req.session.userId = user.id
          return res.redirect("/profile");
        } else {
          return res.redirect(`/login?message=incorrect userName/password`);
        }
      } else {
        return res.redirect("/login?message=incorrect userName/password");
      }
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        const err = error.errors.map((e) => e.message);
        res.redirect(`/login?message=${err}`);
      } else {
        console.log(error);
        res.send(error.message);
      }
    }
  }
  static logout(req, res){
    req.session.destroy((error)=>{
      if (error) {
        console.log(error)
        res.send(error.message)
      } else {
        res.redirect('/login')
      }
    })
  }
  static register(req, res) {
    try {
      const { message } = req.query;
      res.render("register", { message });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
  static async postRegister(req, res) {
    try {
      const { userName, email, password } = req.body;
      await User.create({ userName, email, password });
      res.redirect("/login");
    } catch (error) {
      if (
        error.name === "SequelizeUniqueConstraintError" ||
        error.name === "SequelizeValidationError"
      ) {
        const err = error.errors.map((e) => e.message);
        res.redirect(`/register?message=${err}`);
      } else {
        console.log(error);
        res.send(error.message);
      }
    }
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
      const posts = await Post.findAll({
        include: [{ model: Tag }, { model: User }],
      });
      // console.log(posts);
      // res.send(posts);
      res.render("post", { posts });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async createPost(req, res) {
    const { userId } = req.params;
    try {
      const user = await User.findByPk(userId);
      const post = await Post.findAll();

      res.render("addPost", { user, post });
      // res.send(user);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async savePost(req, res) {
    const { userId } = req.params;
    try {
      const { title, content, tagId } = req.body;
      await Post.creat({
        title,
        content,
        tagId,
      });
      res.redirect(`/posts`);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = Controller;
