const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./users')(sequelize, DataTypes);
db.Course = require('./course')(sequelize, DataTypes);
db.Cart = require('./Cart')(sequelize, DataTypes);

module.exports = db;
