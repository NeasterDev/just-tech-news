<<<<<<< HEAD
=======
// import the Sequelize constructor from the library
>>>>>>> 0f11a03d780d0eb3c3c8d0c3cbcffe85f169699f
const Sequelize = require('sequelize');

require('dotenv').config();

<<<<<<< HEAD
// create connection to our db
=======
// create connection to our database, pass in your MySQL information for username and password
>>>>>>> 0f11a03d780d0eb3c3c8d0c3cbcffe85f169699f
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

<<<<<<< HEAD
module.exports = sequelize;
=======
module.exports = sequelize;
>>>>>>> 0f11a03d780d0eb3c3c8d0c3cbcffe85f169699f
