const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database"); // Import DB connection

const samaj = sequelize.define("Samaj", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
}, {
    timestamps: true, // Adds createdAt and updatedAt
});

module.exports = samaj;
