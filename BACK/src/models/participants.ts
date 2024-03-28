import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { User } from "./user";
import { Call } from "./calls";

// Creación de la tabla calls con sequelize
export const Participats = sequelize.define('participat', {
    call_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Call, 
            key: 'id'   
        }
    },
    participant_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: User, 
            key: 'id'   
        }
    },
    acepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: "0",
        allowNull: true
    }
})