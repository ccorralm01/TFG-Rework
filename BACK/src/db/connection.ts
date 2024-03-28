import { Sequelize } from "sequelize";
import 'dotenv/config'

// Conexion con la base de datos mysql con sequelize
const sequelize = new Sequelize(process.env.BD_NAME || 'tfgrework', 
                                process.env.BD_USER || 'root', 
                                process.env.BD_PS || 'cesar', {
    host: process.env.BD_HOST || 'localhost',
    dialect: 'mysql'
});

export default sequelize;