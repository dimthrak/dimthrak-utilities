module.exports = {
    async execute(client) {
        client.on('message', message => {
            try {
                if (message.channel.type == 'dm') return;
                const mod = db.fetch(`ModeratorRoleID_${message.guild.id}`)
                if (mod == null) {
                    footertext = 'DIMTHRAK Utilities is not activated, run dm!oobe to activate \nbotOS ' + version + '\nCodename: ' + codename + 'GIMME FISH'
                } else if (message.channel.type == 'dm') {
                    footertext = 'botOS ' + version + '\nCodename: ' + codename + 'GIMME FISH'
                } else {
                    footertext = 'botOS ' + version + '\nCodename: ' + codename + 'GIMME FISH'
                }
            } catch (error) {
                footertext = 'DIMTHRAK Utilities is not activated, run dm!oobe to activate \nbotOS ' + version + '\nCodename: ' + codename + 'GIMME FISH'
                fs.appendFileSync('../../logs/errors.log', error + '\n')
            }
        })
    }
}