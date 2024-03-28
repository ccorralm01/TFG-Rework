"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Call = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
// Creación de la tabla calls con sequelize
exports.Call = connection_1.default.define('call', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    host: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    callname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
