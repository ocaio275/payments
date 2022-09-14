/* Importing the node-webhooks module. */
const webhooks = require('node-webhooks')

/**
 * It creates a new instance of the webhooks class, and passes in an object with a db property, which
 * is an object with a callback_hook property, which is an array with a single element, which is a
 * string.
 * @returns A webhooks object
 */
const registerHooks = () =>{
    return new webhooks({
        db :{
            'callback_hook': ['http://localhost:3000/client']
        }
    })
}

module.exports = registerHooks