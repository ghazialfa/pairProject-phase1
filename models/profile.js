"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init(
    {
      name: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      gender: DataTypes.STRING,
      UserId: {
        type: DataTypes.INTEGER,
        unique: true,
        references: { models: "Users", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
