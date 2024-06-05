const Sequelize = require('sequelize');
const sequelize = require('../../utils/db');

const Category = sequelize.define(
    'Category', {
    id: {
        type: Sequelize.INTEGER(),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(11)
    }
}, {
    timestamps: false,
    tableName: 'category'
});

module.exports = Category;