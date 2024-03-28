"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
// Conexion con la base de datos mysql con sequelize
const sequelize = new sequelize_1.Sequelize(process.env.BD_NAME || 'tfgrework', process.env.BD_USER || 'root', process.env.BD_PS || 'cesar', {
    host: process.env.BD_HOST || 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
