const Client = require('../model/Client')

module.exports = class ClientController {
    static async webHook(req, res){
        console.log('chamada interna', req.body)
        const { data } = req.body
        await Client.create(data)
        return res.status(200).end()
    }
}