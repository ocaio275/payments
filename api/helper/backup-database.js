const sendMail = require('./send-mail')
const cron = require('node-cron')
const shell = require('shelljs')

cron.schedule('13 2 * * *', function () {
    if (shell.exec(`mysqldump -uroot payments >C:\/Users\/ocaio\/desktop\/${Date.now(0)}.sql`).code !== 0) {
        shell.exit(1)
    }
    else {
        const mail = 'ocaio275@gmail.com'
        const msg = `Backup realizado com sucesso  na data: ${Date().toLocaleString()}`
        sendMail(mail, 'Backup completo', msg)
        shell.echo('Backup completo')
    }

})

module.exports = cron