"use strict";
<<<<<<< HEAD
const { User } = require('../models')
const bcrypt = require('bcryptjs');

class Controller {
    static login(req, res){
        try {
            res.render('login')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }
    static async validateLogin(req, res){
        try {
            const {userName, password} = req.body
            const user = await User.findOne({where: {userName: userName}})
            if (user) {
                const isPassword = bcrypt.compareSync(password, user.password)
                if (isPassword) {
                    return res.redirect('/post')
                }else{
                    return res.redirect('/login?error=incorrect user/password')
                }
            }else{
                return res.redirect('/login?error=incorrect user/password')
            }
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }
    static register(req, res){
        try {
            res.render('register')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }
    static async postRegister(req, res){
        try {
            const {userName, email, password} = req.body
            await User.create({userName, email, password})
            res.redirect('/login')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }
}

module.exports = Controller
=======

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
>>>>>>> c589a25 (correct models dll)
