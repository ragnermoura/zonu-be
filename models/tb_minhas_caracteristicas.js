const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Caracteristica = require("./tb_caracteristica");

const MinhasCaracteristicas = conn.define(
    "tb_minhas_caracteristicas",
    {
        id_minhas_caracteristicas: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        id_caracteristica: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    { freezeTableName: true });

MinhasCaracteristicas.belongsTo(Caracteristica, {
    foreignKey: "id_caracteristica",
    foreignKeyConstraint: true,
});

module.exports = MinhasCaracteristicas;