"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Conexion con la base de datos mysql con sequelize
const sequelize = new sequelize_1.Sequelize('tfgrework', 'root', 'cesar', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
