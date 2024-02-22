const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");

const Usuario = require("../tb_usuarios");
const NovoCondominio = require("./tb_novo_condominio");

const ImagemCondominio = conn.define("tb_imagem_condominio", {
  id_imagem_condominio: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fotoCondominio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_condominio: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
 
}, { freezeTableName: true });


ImagemCondominio.belongsTo(Usuario, {
  foreignKey: "id_user",
  foreignKeyConstraint: true,
});
ImagemCondominio.belongsTo(NovoCondominio, {
    foreignKey: "id_condominio",
    foreignKeyConstraint: true,
  });


module.exports = ImagemCondominio;