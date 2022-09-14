/* Importing the DataTypes from the sequelize package. */
const { DataTypes } = require('sequelize')

/* Importing the connection to the database. */
const db = require('../../db/conn')

/* Creating a table in the database. */
const Payment = db.define('Payment',{
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
        defaultValue: true
    },
})

/* Exporting the Payment model to be used in other files. */
module.exports = Payment