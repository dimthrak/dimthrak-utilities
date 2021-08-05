module.exports = {
    name: 'stats'
    aliases: ['websitestats', 'webstats']
    description: 'Shows the website statuses'
    usage: ''
    cooldown: 5
    execute(message, args, client) {
        var emoji1 = ''
        var emoji2 = ''
        var emoji3 = ''
        var emoji4 = ''
        try {
            if ($('serveroutagenums[0]') == 0) {
                emoji1 = 'green_circle'
            } else if ($('serveroutagenums[0]') == 1 || ($('serveroutagenums[0]') == 2)) {
                emoji1 = 'orange_circle'
            } else if ($('serveroutagenums[0]') == 3) {
                emoji1 = 'red_circle'
            }
            if ($('serveroutagenums[1]') == 0) {
                emoji2 = 'green_circle'
            } else if ($('serveroutagenums[0]') == 1 || ($('serveroutagenums[0]') == 2)) {
                emoji2 = 'orange_circle'
            } else if ($('serveroutagenums[0]') == 3) {
                emoji2 = 'red_circle'
            }
            if ($('serveroutagenums[2]') == 0) {
                emoji3 = 'green_circle'
            } else if ($('serveroutagenums[0]') == 1 || ($('serveroutagenums[0]') == 2)) {
                emoji3 = 'orange_circle'
            } else if ($('serveroutagenums[0]') == 3) {
                emoji3 = 'red_circle'
            }
            if ($('serveroutagenums[3]') == 0) {
                emoji3 = 'green_circle'
            } else if ($('serveroutagenums[0]') == 1 || ($('serveroutagenums[0]') == 2)) {
                emoji3 = 'orange_circle'
            } else if ($('serveroutagenums[0]') == 3) {
                emoji3 = 'red_circle'
            }
            message.channel.send('Main server: ' + emoji1 + ' ' + $('serveroutage[0]'))
            message.channel.send('Second server: ' + emoji2 + ' ' + $('serveroutage[1]'))
            message.channel.send('Storage center: ' + emoji3 + ' ' + $('serveroutage[2]'))
            message.channel.send('Website: ' + emoji4 + ' ' + $('serveroutage[3]'))
        }
    }
}