const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");

const Usuario = require("../tb_usuarios");

const CaracteristicaCondominio = conn.define("tb_caracteristicas_condominio", {
    id_caracteristica_condominio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_caracteristica_condominio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

}, { freezeTableName: true });


CaracteristicaCondominio.belongsTo(Usuario, {
    foreignKey: "id_user",
    foreignKeyConstraint: true,
});


module.exports = CaracteristicaCondominio;