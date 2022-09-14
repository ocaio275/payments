const { Sequelize } = require('sequelize')

/* Creating a new instance of Sequelize, and passing the database name, username, password, host and
dialect. */
const sequelize = new Sequelize('payments', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
/* Trying to connect to the database. If it fails, it will log the error. */
try {
    sequelize.authenticate()
    console.log('Conectado ao BD')
} catch (error) {
    console.log(error)
}
module.exports = sequelize