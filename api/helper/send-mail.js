require('dotenv').config()
const nodemailer = require('nodemailer')

let transport = nodemailer.createTransport({
    host: process.env.SMTP,
    port: process.env.PORT,
    secure: true,
    auth: {
        user: encodeURIComponent(process.env.FROM),
        pass: encodeURIComponent(process.env.PASSWORD)
    }
})
const sendMail = async (to, subject, text) => {
    const msgMail = {
        from: encodeURIComponent(process.env.FROM),
        to: to,
        subject: subject,
        text: text
    }

    transport.sendMail(msgMail, function(err, info){
        if(err){
            throw err
        }
        else{
            console.log('Email enviado')
        }
    })
}

module.exports = sendMail