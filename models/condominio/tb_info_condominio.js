const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");

const Usuario = require("../tb_usuarios");

const InfoCondominio = conn.define("tb_info_condominio", {
  id_info_condominio: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome_condominio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
 
}, { freezeTableName: true });


InfoCondominio.belongsTo(Usuario, {
  foreignKey: "id_user",
  foreignKeyConstraint: true,
});


module.exports = InfoCondominio;