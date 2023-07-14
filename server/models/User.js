/* const { Sequelize, DataTypes } = require("sequelize"); */

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define("User", {
    userid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return User;
};
