const { execute } = require("../modules/misc/emitActions");

module.exports = {
    name: 'refresh'
    aliases: ['refstats', 'refreshstats', 'refreshwebstats']
    usage: ''
    cooldown: 5
    execute(message, args, client) {
        var sitestaff = $('sitestaff')
        function checkifsitestaff() {
            for (var i = 0; i < sitestaff; i++) {
                if (message.author.id = sitestaff[i]) {
                    return true;

                } else {
                    return false;
                }
            }
        }
        var today = new Date();
        var date = today.getMonth() + 1 + '-' + (today.getDate()) + '-' + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var text = ''
        var hex = ''
        var text2 = ''
        var hex2 = ''
        var text3 = ''
        var hex3 = ''
        var text4 = ''
        var hex4 = ''
        if ($('serveroutagenums[0]') == 0) {
            hex = '#00ff00'
            text = 'The main server is up.'
        } else if ($('serveroutagenums[0]') == 1) {
            hex = '#eea515'
            text = 'There is a network outage to the main server.'
        } else if ($('serveroutagenums[0]') == 2) {
            hex = '#eeaa15'
            text = 'The main server is in maintenance.'
        } else if ($('serveroutagenums[0]') == 3) {
            hex = '#ff0000'
            text = 'The main server has a SERIOUS outage.'
        }
        if ($('serveroutagenums[1]') == 0) {
            hex2 = '#00ff00'
            text2 = 'The secondary server is up.'
        } else if ($('serveroutagenums[1]') == 1) {
            hex2 = '#eea515'
            text2 = 'There is a network outage to the secondary server.'
        } else if ($('serveroutagenums[1]') == 2) {
            hex2 = '#eeaa15'
            text2 = 'The secondary server is in maintenance.'
        } else if ($('serveroutagenums[1]') == 3) {
            hex2 = '#ff0000'
            text2 = 'The secondary server has a SERIOUS outage.'
        }
        if ($('serveroutagenums[2]') == 0) {
            hex3 = '#00ff00'
            text3 = 'The storage center is up.'
        } else if ($('serveroutagenums[2]') == 1) {
            hex3 = '#eea515'
            text3 = 'There is a network outage to the storage center.'
        } else if ($('serveroutagenums[2]') == 2) {
            hex3 = '#eeaa15'
            text3 = 'The storage center is in maintenance.'
        } else if ($('serveroutagenums[2]') == 3) {
            hex3 = '#ff0000'
            text3 = 'The storage center has a SERIOUS outage.'
        }
        if ($('serveroutagenums[3]') == 0) {
            hex4 = '#00ff00'
            text4 = 'The website is up.'
        } else if ($('serveroutagenums[3]') == 1) {
            hex4 = '#eea515'
            text4 = 'The website is in maintenance.'
        } else if ($('serveroutagenums[3]') == 2) {
            hex4 = '#eeaa15'
            text4 = 'The website has a outage.'
        }
        const mainserverembed = new Discord.MessageEmbed()
            .setColor(hex)
            .setTitle('Main Server Statuses')
            .setDescription(text)
        const secondaryserverembed = new Discord.MessageEmbed()
            .setColor(hex2)
            .setTitle('Secondary Server Statuses')
            .setDescription(text2)
        const storageserverembed = new Discord.MessageEmbed()
            .setColor(hex3)
            .setTitle('Storage Center Statuses')
            .setDescription(text3)
        const siteembed = new Discord.MessageEmbed()
            .setColor(hex4)
            .setTitle('Website Statuses')
            .setDescription(text4)
        try {
            if (checkifsitestaff) {
                const SiteLog = db.fetch(`WebsiteStatsID_${newMessage.guild.id}`)
                const channel = client.channels.cache.get(`${SiteLog}`)
                channel.send(mainserverembed)
                channel.send(secondaryserverembed)
                channel.send(storageserverembed)
                channel.send(siteembed)
            } else {
                message.channel.send('You cannot use this command because it is site staff only.')
            }
    }
}