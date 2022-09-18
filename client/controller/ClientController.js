const Client = require('../model/Client')

/* A class that is exporting a function called webHook. */
module.exports = class ClientController {
/**
 * It receives a request from a webhook, and then saves the data from the request to a database
 * @param req - The request object.
 * @param res - The response object.
 * @returns The response is being returned as a string.
 */
    static async webHook(req, res){        
        const { data } = req.body
        console.log('chamada interna', req.body)
        await Client.create(data)
        return res.status(200).end()
    }
}