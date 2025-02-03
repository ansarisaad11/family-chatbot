const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Family = require("./Family");

const Member = sequelize.define("Member", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.ENUM("Male", "Female", "Other"), allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1 } },
    blood_group: { type: DataTypes.STRING(5) },
    mobile1: { type: DataTypes.STRING(13), unique: true, allowNull: false },
    mobile2: { type: DataTypes.STRING(13), allowNull: true },
}, {
    timestamps: true,
});

// Foreign Key Relationship
Member.belongsTo(Family, { foreignKey: "family_id", onDelete: "CASCADE" });
Family.hasMany(Member, { foreignKey: "family_id" });

module.exports = Member;
