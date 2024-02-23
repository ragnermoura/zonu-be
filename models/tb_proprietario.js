const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Usuario = require("./tb_usuarios");


const Proprietario = conn.define("tb_proprietario", {
  id_proprietario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  telefone1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_corretor: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

}, { freezeTableName: true });


Proprietario.belongsTo(Usuario, {
  foreignKey: "id_user",
  foreignKeyConstraint: true,
});


module.exports = Proprietario;