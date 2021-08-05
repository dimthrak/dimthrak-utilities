  
module.exports = {
  name: 'maintenancemode',
  aliases: ['maintenance'],
  description: 'Turns on/off maintenance mode.',
  botmanager:true,
  essential:true,
	execute(message, args, client) {
    const Discord = require('discord.js')
    const db = require('quick.db')
    if(!args[0]) return message.channel.send('No args, gonna sit and wait')
    if(args[0].toLowerCase() == 'enable') {
      db.set(`MaintenanceMode`, 'true')
      message.channel.send('Maintenance mode enabled.')
    }
    if(args[0].toLowerCase() == 'disable') {
      db.set(`MaintenanceMode`, 'false')
      message.channel.send('Maintenance mode disabled.')
    }
  }
}