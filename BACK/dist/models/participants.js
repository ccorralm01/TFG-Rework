"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participats = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const user_1 = require("./user");
const calls_1 = require("./calls");
// Creación de la tabla calls con sequelize
exports.Participats = connection_1.default.define('participat', {
    call_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: calls_1.Call,
            key: 'id'
        }
    },
    participant_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: user_1.User,
            key: 'id'
        }
    },
    acepted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: "0",
        allowNull: true
    }
});
