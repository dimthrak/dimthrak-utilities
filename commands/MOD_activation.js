module.exports = {
    name: 'activation',
    aliases: ['issetup'],
    description: 'Shows activation status.',
    usage: 'dm!activation',
    cooldown: 0,
    mod: true,
    execute: async (message, args, client) => {
        const Discord = require('discord.js')
        const db = require('quick.db')
        const activationembed = new Discord.MessageEmbed()
            .setTitle('Activation status')
        const result = db.fetch(`ModeratorRoleID_${message.guild.id}`)
        if (result == null) {
            activationembed.setDescription(':x: DIMTHRAK Utilities is not activated in this guild. To activate, run `dm!oobe`')
            message.channel.send(activationembed)
        } else {
            activationembed.setDescription(':white_check_mark: DIMTHRAK Utilities is activated.')
            message.channel.send(activationembed)
        }
    }
}