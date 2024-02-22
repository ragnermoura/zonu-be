const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");

const Usuario = require("../tb_usuarios");
const InfoCondominio = require("./tb_info_condominio");
const CaracteristicasCondominio = require("./tb_minhas_caracateristicas_condominio");
const LocalizacaoCondominio = require("./tb_localizacao_condominio");
const ProximidadesCondominio = require("./tb_proximidades_condominio");
const ComplementoCondominio = require("./tb_complementos_condominio");

const NovoCondominio = conn.define("tb_novo_condominio", {
  id_condominio: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_info_condominio: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_minhas_caracteristicas_condominio: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_localizacao_condominio: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },


}, { freezeTableName: true });


NovoCondominio.belongsTo(Usuario, {
  foreignKey: "id_user",
  foreignKeyConstraint: true,
});


module.exports = NovoCondominio;