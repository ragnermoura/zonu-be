const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");

const CaracteristicasCondominio = require("./tb_caracteristica_condominio");

const MinhasCaracteristicasCondominio = conn.define(
    "tb_minhas_caracteristicas_condominio",
    {
        id_minhas_caracteristicas_condominio: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        id_caracteristica_condominio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    { freezeTableName: true });

MinhasCaracteristicasCondominio.belongsTo(CaracteristicasCondominio, {
    foreignKey: "id_caracteristica_condominio",
    foreignKeyConstraint: true,
});

module.exports = MinhasCaracteristicasCondominio;