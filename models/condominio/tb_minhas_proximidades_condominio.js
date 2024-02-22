const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");

const ProximidadesCondominio = require("./tb_proximidades_condominio");

const MinhasProximidadesCondominio = conn.define(
    "tb_minhas_proximidades_condominio",
    {
        id_minhas_proximidades_condominio: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        id_proximidade_condominio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { freezeTableName: true });

MinhasProximidadesCondominio.belongsTo(ProximidadesCondominio, {
    foreignKey: "id_proximidade",
    foreignKeyConstraint: true,
});

module.exports = MinhasProximidadesCondominio;