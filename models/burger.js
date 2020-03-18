const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

let burgers = sequelize.define("burgers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING,
    allowNull: false,
    len: [10,20]
  },
  is_devoured: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  }
},{
  timestamps: false,
  freezeTableName: true
});

burgers.sync();

module.exports = burger;
