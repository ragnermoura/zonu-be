const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Info = require("./tb_info_imovel");
const Proprietario = require("./tb_proprietario");
const Condominio = require("./condominio/tb_novo_condominio");
const Comodos = require("./tb_comodos");
const Medidas = require("./tb_medidas");
const Preco = require("./tb_preco");
const Caracteristicas = require("./tb_imovel_caracteristica");
const Localizacao = require("./tb_localizacao");
const Proximidades = require("./tb_imovel_proximidades");
const Descricao = require("./tb_descricao");
const Complemento = require("./tb_complementos");
const Usuario = require("./tb_usuarios");
const Publicacao = require("./tb_publicacao");


const NovoImovel = conn.define("tb_novo_imovel", {
  id_imovel: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_info: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tem_condominio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_condominio: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_proprietario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_comodos: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_medidas: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_preco: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_caracteristica_imovel: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_localizacao: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_proximidades_imovel: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_descricao: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_complemento: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_publicacao: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

}, { freezeTableName: true });


NovoImovel.belongsTo(Info, {
  foreignKey: "id_info",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Condominio, {
  foreignKey: "id_condominio",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Proprietario, {
  foreignKey: "id_proprietario",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Comodos, {
  foreignKey: "id_comodos",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Medidas, {
  foreignKey: "id_medidas",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Preco, {
  foreignKey: "id_preco",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Caracteristicas, {
  foreignKey: "id_imovel_caracteristica",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Localizacao, {
  foreignKey: "id_localizacao",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Proximidades, {
  foreignKey: "id_imovel_proximidades",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Descricao, {
  foreignKey: "id_descricao",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Complemento, {
  foreignKey: "id_complemento",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Publicacao, {
  foreignKey: "id_publicacao",
  foreignKeyConstraint: true,
});

NovoImovel.belongsTo(Usuario, {
  foreignKey: "id_user",
  foreignKeyConstraint: true,
});



module.exports = NovoImovel;