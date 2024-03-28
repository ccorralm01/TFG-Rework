import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

// Creación de la tabla calls con sequelize
export const Participats = sequelize.define('participat', {
    call_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    participant_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    acepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: "0",
        allowNull: true
    }
})