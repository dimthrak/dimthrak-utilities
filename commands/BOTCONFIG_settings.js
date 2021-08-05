module.exports = {
    name: 'settings',
    aliases: ['preferences'],
    description: 'Changes user preferences.',
    usage: 'dm!settings [setting name] [setting]',
    cooldown: 0,
    mod: false,
    async execute(message, args, client) {
        const Discord = require('discord.js')
        const db = require('quick.db')
        if (!args[0]) {
            if (db.fetch(`ProfanityFilterStatus_${message.guild.id}`) == null) { db.set(`ProfanityFilterStatus_${message.guild.id}`, true) }
            const noargs = new Discord.MessageEmbed()
                .setTitle('DIMTHRAK Utilities Preferences')
                .addFields(
                    { name: 'guildProfanity [true/false]', value: '`' + db.fetch(`ProfanityFilterStatus_${message.guild.id}`) + '`', inline: false },
                )
                .setFooter(footertext)
            message.channel.send(noargs)
        } else if (args[0].toLowerCase() == 'guildprofanity') {
            if (!message.member.roles.cache.some(role => role.id == db.fetch(`ModeratorRoleID_${message.guild.id}`))) return message.channel.send('You aren\'t a mod so you can\'t enable/disable the profanity filter lmao')
            if (args[1] !== 'true' && args[1] !== 'false') return message.channel.send('That\'s not a valid option lmao, only `true, false` are accepted')
            if (args[1] == 'true') {
                db.set(`ProfanityFilterStatus_${message.guild.id}`, true)
                message.channel.send(':white_check_mark: Setting `guildProfanity` has successfully been set to `true`')
            } else if (args[1] = 'false') {
                db.set(`ProfanityFilterStatus_${message.guild.id}`, false)
                message.channel.send(':white_check_mark: Setting `guildProfanity` has successfully been set to `false`')
            }
        } else {
            message.channel.send('That\'s not a valid setting name lmao')
        }
    }
}