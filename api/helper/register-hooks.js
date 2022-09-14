const webhooks = require('node-webhooks')

const registerHooks = () =>{
    return new webhooks({
        db :{
            'callback_hook': ['http://localhost:3000/client']
        }
    })
}

module.exports = registerHooks