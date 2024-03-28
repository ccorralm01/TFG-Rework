import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

// Creación de la tabla calls con sequelize
export const Call = sequelize.define('call', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    host: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    callname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
})