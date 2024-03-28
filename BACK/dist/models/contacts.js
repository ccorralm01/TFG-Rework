"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
// Creación de la tabla calls con sequelize
exports.Contacts = connection_1.default.define('contact', {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    addcontact_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    acepted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: "0",
        allowNull: true
    }
});
