require('dotenv').config()
const nodemailer = require('nodemailer')



/**
 * It sends an email to the user with the subject and text passed as parameters
 * @returns the result of the transporter.sendMail() function.
 */
const sendEmail = async (to, subject, text) => {
    /* Creating a transporter object that will be used to send the email. */
    var transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    });

    /* Creating an object with the email information. */
    let msgMail = {
        from: process.env.MAIL_USER,
        to: to,
        subject: subject,
        text: text
    }

    /* Sending the email. */
    transporter.sendMail(msgMail, function (err, info) {
        if (err) {
            console.log(err)
            return
        }
        else {
            console.log('Email enviado')
        }
    })
}

module.exports = sendEmail