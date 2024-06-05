const sequelize = require('../utils/db');
const db = {};

try {
    const db = sequelize.authenticate();
    console.log('Database started');
} catch (error) {
    console.error(error.message);
}

module.exports = db;
