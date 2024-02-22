const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Usuario = require("./tb_usuarios");
const NovoImovel = require("./tb_novo_imovel");

const ImagemImovel = conn.define("tb_imagem_imovel", {
  id_imagem: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_novo_imovel: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
 
}, { freezeTableName: true });


ImagemImovel.belongsTo(Usuario, {
  foreignKey: "id_user",
  foreignKeyConstraint: true,
});
ImagemImovel.belongsTo(NovoImovel, {
    foreignKey: "id_novo_imovel",
    foreignKeyConstraint: true,
  });


module.exports = ImagemImovel;