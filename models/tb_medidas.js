const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Medidas = conn.define("tb_medidas", {
  id_medidas: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  area_contruida: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  area_privativa: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  area_total: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  media_metro_quadrado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
 

}, { freezeTableName: true });


module.exports = Medidas;