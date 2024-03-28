import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { User } from "./user";

// Creación de la tabla contacts con sequelize
export const Contacts = sequelize.define('contact', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: User, 
            key: 'id'   
        }
    },
    addcontact_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: User, 
            key: 'id'    
        }
    },
    accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
    }
});
