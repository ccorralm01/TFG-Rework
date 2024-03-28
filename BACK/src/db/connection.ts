import { Sequelize } from "sequelize";

// Conexion con la base de datos mysql con sequelize
const sequelize = new Sequelize('tfgrework', 'root', 'cesar', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;