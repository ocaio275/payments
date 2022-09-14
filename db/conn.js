const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('payments', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
try {
    sequelize.authenticate()
    console.log('Conectado ao BD')
} catch (error) {
    console.log(error)
}
module.exports = sequelize