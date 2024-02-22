const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Usuario = require("./tb_usuarios");

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
 
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

}, { freezeTableName: true });

Medidas.belongsTo(Usuario, {
  foreignKey: "id_user",
  foreignKeyConstraint: true,
});



module.exports = Medidas;