"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User /* , { foreignKey: "UserId" } */);
      Post.hasMany(models.PostTag /* , { foreignKey: "PostId" } */);
      Post.belongsToMany(models.Tag, {
        through: models.PostTag,
        /*  foreignKey: "PostId", */
      });
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
