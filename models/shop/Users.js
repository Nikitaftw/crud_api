const Sequelize = require('sequelize');
const sequelize = require('../../utils/db');

const User = sequelize.define(
    'User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(35)
    },
    email: {
        type: Sequelize.STRING(35)
    },
    password: {
        type: Sequelize.STRING(255)
    }
}, {
    timestamps: false,
    tableName: 'users'
});

module.exports = User;