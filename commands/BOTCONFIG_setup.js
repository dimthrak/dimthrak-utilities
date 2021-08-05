module.exports = {
    name: "oobe",
    aliases: ["oobsetup"],
    description: "Sets the bot up.",
    usage: "dm!oobe",
    cooldown: 0,
    mod: false,
    execute: async (message, args, client) => {
        const Discord = require("discord.js");
        const db = require("quick.db");
        var step1done = 'false'
        if (!message.member.hasPermission("MANAGE_GUILD")) {
            message.channel.send(
                "You miss permissions. You need to have the Manage Server permission to set the bot up."
            );
        } else {
            const oobeembed = new Discord.MessageEmbed()
                .setColor("#0000FF")
                .setTitle("Set up DIMTHRAK Utilities")
                .setDescription(
                    "Thanks for adding DIMTHRAK Utilities to the server! \nTo start, we need to run the initial oobe to configure the bot so it suits the server well. \nYou can type `cancel` anytime to cancel the oobe."
                );
            message.channel.send(oobeembed);
            const step1embed = new Discord.MessageEmbed()
                .setColor("#0000FF")
                .setTitle("Set up DIMTHRAK Utilities")
                .setDescription(
                    "Please enter the role ID of a role meant for moderators. This role will allow people who have it to moderate the bot eg banning, warning, muting etc. \nPlease enter the moderator role ID now or type `cancel` anytime to cancel the oobe. "
                );
            const step2embed = new Discord.MessageEmbed()
                .setColor("#0000FF")
                .setTitle("Set up DIMTHRAK Utilities")
                .setDescription(
                    "Sweet! Now, please enter the role ID meant for the default member. If you don't have one, simply copy the ID of the everyone role. \nPlease enter the member role ID or type `cancel` anytime to cancel the oobe."
                );
            const step3embed = new Discord.MessageEmbed()
                .setColor("#0000FF")
                .setTitle("Set up DIMTHRAK Utilities")
                .setDescription(
                    "OK man. Now enter the sitelog channel. This will log every break and outage."
                );
            const doneembed = new Discord.MessageEmbed()
                .setColor("#0000FF")
                .setTitle("Set up DIMTHRAK Utilities")
                .setDescription("Done! We have finished setting up the bot. Have fun :poop:!")
            message.channel.send(step1embed);
            message.channel.awaitMessages(m => m.author.id == message.author.id,
                { max: 1, time: 60000 }).then(collected => {
                    if (collected.first().content.toLowerCase() == collected.first().content.toLowerCase()) {
                        if (collected.first().content.toLowerCase() == 'cancel') {
                            return message.channel.send('Operation cancelled. \nOnce you are ready, please restart the oobe as the oobe is very important in order to properly customise this bot for your server.')
                        } else {
                            var responsestep1 = collected.first().content.toLowerCase()
                            db.set(`ModeratorRoleID_${message.guild.id}`, responsestep1)
                            const step2embed = new Discord.MessageEmbed()
                                .setColor("#0000FF")
                                .setTitle("Set up DIMTHRAK Utilities")
                                .setDescription(
                                    "Sweet! Now, please enter the role ID meant for the default member. If you don't have one, simply copy the ID of the everyone role. \nPlease enter the member role ID or type `cancel` anytime to cancel the oobe."
                                );
                            message.channel.send(step2embed).then(message.channel.awaitMessages(m => m.author.id == message.author.id,
                                { max: 1, time: 60000 }).then(collected => {
                                    if (collected.first().content.toLowerCase() == collected.first().content.toLowerCase()) {
                                        if (collected.first().content.toLowerCase() == 'cancel') {
                                            return message.channel.send('Operation cancelled. \nOnce you are ready, please restart the oobe as the oobe is very important in order to properly customise this bot for your server.')
                                        } else if (collected.first().content.toLowerCase() == 'undefined') {
                                            return message.channel.send('You did not answer in time, so oobe is cancelled.')
                                        } else {
                                            var responsestep2 = collected.first().content.toLowerCase()
                                            db.set(`MemberRoleID_${message.guild.id}`, responsestep2)
                                            message.channel.send(step3embed).then(message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                { max: 1, time: 60000 }).then(collected => {
                                                    if (collected.first().content.toLowerCase() == collected.first().content.toLowerCase()) {
                                                        if (collected.first().content.toLowerCase() == 'cancel') {
                                                            return message.channel.send('Operation cancelled. \nOnce you are ready, please restart the oobe as the oobe is very important in order to properly customise this bot for your server.')
                                                        } else if (collected.first().content.toLowerCase() == 'undefined') {
                                                            return message.channel.send('You didn\'t answer in time, what the heck???')
                                                        } else {
                                                            var responsestep3 = collected.first().content.toLowerCase()
                                                            db.set(`WebsiteStatsID_${message.guild.id}`, responsestep3)
                                                            message.channel.send(doneembed)

                                                        }
                                                    }


                                                }









                                        }
                                    }
                                }))
                        }
                    }
                })
        }
    }
}
