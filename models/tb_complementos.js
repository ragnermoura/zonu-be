const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Usuario = require("./tb_usuarios");

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
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
 
}, { freezeTableName: true });


Complemento.belongsTo(Usuario, {
  foreignKey: "id_user",
  foreignKeyConstraint: true,
});


module.exports = Complemento;