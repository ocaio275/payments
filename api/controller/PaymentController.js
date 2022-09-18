const Payment = require('../model/Payment')

const registerHooks = require('../helper/register-hooks')
/* A class that has two methods: createPayment and getPayment. */
module.exports = class PaymentController {
    /**
     * It creates a payment and then triggers a hook.
     * @param req - The request object
     * @param res - The response object
     * @returns The payment object
     */
    static async createPayment(req, res) {
        try {
            const payment = await Payment.create(req.body)
            if (payment) {
                const hooks = registerHooks();
                hooks.trigger('callback_hook', { message: 'Novo pagamento criado', data: payment })
            }
            return res.status(201).json({ payment })
        } catch (error) {
            return res.status(500).json({ message: 'Falha ao criar o pagamento', error: error })
        }
    }
    /**
     * It's a function that gets all the payments from the database and returns them in a JSON format.
     * @param req - The request object.
     * @param res - response
     * @returns The list of payments
     */
    static async getPayment(req, res) {
        try {
            const paymentsList = await Payment.findAll({ raw: true })
            return res.status(200).json({ data: paymentsList })
        } catch (error) {
            return res.status(500).json({ message: 'Falha ao carregar lista de pagamento', error: error })
        }
    }
}