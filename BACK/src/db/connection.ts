import { Sequelize } from "sequelize";

const sequelize = new Sequelize('nombrebd', 'usuario', 'contraseña', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;