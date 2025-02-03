const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Samaj = require("./Samaj");

const Family = sequelize.define("Family", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    family_name: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.TEXT },
}, {
    timestamps: true,
});

// Foreign Key Relationship
Family.belongsTo(Samaj, { foreignKey: "samaj_id", onDelete: "CASCADE" });
Samaj.hasMany(Family, { foreignKey: "samaj_id" });

module.exports = Family;
