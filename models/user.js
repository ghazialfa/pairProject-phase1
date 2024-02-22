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
      User.hasOne(models.Profile);
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING,
<<<<<<< HEAD
        unique: true
=======
        unique: true,
>>>>>>> c589a25 (correct models dll)
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
<<<<<<< HEAD
        defaultValue: 'user',
=======
        defaultValue: "user",
>>>>>>> c589a25 (correct models dll)
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
<<<<<<< HEAD
      hooks: {beforeCreate: (instance, options) => {
        const bcrypt = require('bcryptjs');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(instance.password, salt);
        console.log(hash)
        instance.password = hash
        }
      }
=======
      hooks: {
        beforeCreate: (instance, options) => {
          const bcrypt = require("bcryptjs");
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(instance.password, salt);
          console.log(hash);
          instance.password = hash;
        },
      },
>>>>>>> c589a25 (correct models dll)
    }
  );
  return User;
};
