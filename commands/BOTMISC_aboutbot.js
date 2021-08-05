module.exports = {
    name: 'about',
    aliases: ['botinfo', 'infobot', 'botabout','aboutbot'],
    description: 'Gets information about bot.',
    usage: '',
    cooldown: 0,
    execute(message, args, client) {
        const fs = require('fs');
        try {
            const member = client.user
            const icon = member.displayAvatarURL({ dynamic: true })
            const name = client.user.username
            const AvatarEmbed = new Discord.MessageEmbed()
                .setTitle('About ' + name)
                .addFields(
                    { name: 'Version', value: '0.3.210', inline: false },
                    { name: 'Author', value: 'Techman', inline: false },
                    { name: 'Based on', value: 'the OrangeEchoJS Kernel (https://github.com/DIMTHRAK Utilities-Devs/DIMTHRAK UtilitiesStable)', inline: false },
                    { name: 'Written in', value: '[Discord.js v12](https://discord.js.org/)', inline: false },

                )
                .setThumbnail(`${icon}`)
            message.channel.send(AvatarEmbed)
        } catch (error) {
            respond('Error', 'Something went wrong.\n' + error + `\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
            errorlog(error)
            // Your code broke (Leave untouched in most cases)
            console.error('an error has occured', error);
        }
    }
}