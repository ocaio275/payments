const sendMail = require('./send-mail')
const cron = require('node-cron')
const shell = require('shelljs')

/* A cron job that runs every day at 20:03 and makes a backup of the database. */
cron.schedule('49 20 * * *', async function () {
/* Making a backup of the database. */
    if (shell.exec(`mysqldump -uroot payments >C:\/Users\/ocaio\/desktop\/${Date.now(0)}.sql`).code !== 0) {
        shell.exit(1)
    }
/* Sending an email to the user with the backup status. */
    else {
        const mail = 'ocaio275@gmail.com'
        const msg = `Backup realizado com sucesso na data: ${Date().toLocaleString()}`
        await sendMail(mail, 'Backup completo', msg)
        shell.echo('Backup completo')
    }

})

module.exports = cron