require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_PORT || 3306,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

sequelize.authenticate()
  .then(() => console.log('Connexion à MySQL réussie ✅'))
  .catch(err => console.error('Connexion échouée ❌ :', err));

module.exports = sequelize;
