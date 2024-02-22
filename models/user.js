"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post);
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING,
        unique: true
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {beforeCreate: (instance, options) => {
        const bcrypt = require('bcryptjs');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(instance.password, salt);
        console.log(hash)
        instance.password = hash
        }
      }
    }
  );
  return User;
};
