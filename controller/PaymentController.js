const Payment = require('../model/Payment')

const registerHooks = require('../helper/register-hooks')
module.exports = class PaymentController {
    static async createPayment(req, res) {
        try {
            const payment = await Payment.create(req.body)
            if (payment) {
                const hooks = registerHooks();
                hooks.trigger('callback_hook', { message: 'Novo pagamento criado', data: payment })
            }
            return res.status(201).json({ payment })
        } catch (error) {
            return res.status(400).json({ message: 'Falha ao criar o pagamento', error: error })
        }
    }
    static async getPayment(req, res) {
        try {
            const paymentsList = await Payment.findAll({ raw: true })
            return res.status(200).json({ data: paymentsList })
        } catch (error) {
            return res.status(400).json({ message: 'Falha ao carregar lista de pagamento', error: err })
        }
    }
}