const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");


const Complemento = conn.define("tb_complemento", {
  id_complemento: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  link_youtube: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link_apresentacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { freezeTableName: true });





module.exports = Complemento;