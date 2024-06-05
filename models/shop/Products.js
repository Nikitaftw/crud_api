const Sequelize = require('sequelize');
const sequelize = require('../../utils/db');

const Product = sequelize.define(
    'Product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100)
    },
    price: {
        type: Sequelize.INTEGER(11)
    },
    category_id: {
        type: Sequelize.INTEGER(11)
    }
}, {
    timestamps: false,
    tableName: 'products'
});

module.exports = Product;