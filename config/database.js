const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: "localhost", // Change to cloud DB host if needed
    dialect: "postgres", // Change to 'mysql' for MySQL
    logging: false, // Disable logging in production

});



module.exports = sequelize;
