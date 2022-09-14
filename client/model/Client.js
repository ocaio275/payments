const { DataTypes } = require('sequelize')

const db = require('../../db/conn')

/* Creating a table in the database. */
const Client = db.define('Client',{
    name: {
        type: DataTypes.STRING,
        require: true
    },
    price:{
        type: DataTypes.DOUBLE,
        require: true
    },
    status:{
        type: DataTypes.BOOLEAN,       
    },
})

module.exports = Client