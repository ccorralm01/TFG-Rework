import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

// Creación de la tabla calls con sequelize
export const Contacts = sequelize.define('contact', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    addcontact_id: {
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