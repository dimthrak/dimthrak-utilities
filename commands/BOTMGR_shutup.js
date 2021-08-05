module.exports = {
    name: 'shutup',
    aliases: ['crash'],
    description: 'Stops the bot.',
    usage: '',
    cooldown: 0,
    execute(message, args, client) {
        message.channel.send('Bot has been shutted down.')
        process.exit()
    }
}