const { DataTypes } = require('sequelize')

const db = require('../db/conn')

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
        defaultValue: false
    },
})

module.exports = Payment