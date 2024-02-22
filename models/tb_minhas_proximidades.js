const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Proximidades = require("./tb_proximidades");

const MinhasProximidades = conn.define(
    "tb_minhas_proximidades",
    {
        id_minhas_proximidades: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        id_proximidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { freezeTableName: true });

MinhasProximidades.belongsTo(Proximidades, {
    foreignKey: "id_proximidade",
    foreignKeyConstraint: true,
});

module.exports = MinhasProximidades;