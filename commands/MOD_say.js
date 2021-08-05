module.exports = {
    name: 'say',
    aliases: ['speak'],
    description: 'Has the bot speak.',
    usage: '<text>',
    cooldown: 0,
    mod: true,
    nodelay: true,
    execute(message, args, client) {
        const Discord = require('discord.js');
        const argarray = message.content.slice(prefix.length).trim().split(/ +/g);
        const text = args.join(' ');
        if (text.includes('@everyone')) {
            message.channel.send('Are you fucking serious? Do you want to ping everyone?')
            return;
        }
        if (text.includes('@here')) {
            message.channel.send('Are you fucking serious? Do you want to ping here?')
            return;
        }
        message.channel.send(text)
        message.delete()
    }
}