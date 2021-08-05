const token = 'ODU1NTE5ODk2MjMzMzEyMzE3.YMzq_g.iXIzFnzTcAQ-dzkqApWLypQ2Lgo'
console.log('Starting DIMTHRAK Utilities')
Discord = require('discord.js')
PREFIX = 'dm!'
const client = new Discord.Client()
client.commands = new Discord.Collection();
client.modcommands = new Discord.Collection();
cooldowns = new Discord.Collection();
db = require('quick.db');
fs = require('fs')
BotManagerRoleID = '806187928056234029'
OwnerID = "799974053770952714"
BotLog = '842791657203040276'
ProcessEndOnError = false
AssignMemberRoleOnJoin = false
CrashNotify = true
const {
	MessageEmbed, DiscordAPIError
} = require('discord.js')

version = '1.0.250'
codename = 'DIMTHRAK Utilities'
errorcount = 0
safemode = false
var outage = false
var serveroutagenums = [1, 1, 1, 0]
var serveroutage = ['network outage', 'network outage', 'network outage', 'up']
var sitestaff = ['799974053770952714', '806187928056234029', '831173602501066824']


//Bot ready
client.once('ready', () => {
	client.user.setPresence({ activity: { name: `in DIMTHRAK ` }, type: 'WATCHING', status: 'dnd' })
		.catch(console.error);
	console.log('DIMTHRAK Utilities ' + version)
	console.log('Codename ' + codename)
	console.log('The bot has started successfully.');
	client.emit("StartupPassed")
})

//Checks for shutdown flag
if (fs.existsSync(`./shutdown.flag`)) {
	console.log('`shutdown.flag` found. Shutting down.')
	process.exit()
} else { }

respond = function (title, content, sendto, color, footer, imageurl) {
	//Title, Content, Where to send, Embed color, Footer, Image URL
	var RespondEmbed = new Discord.MessageEmbed()
	RespondEmbed.setTitle(title)
	RespondEmbed.setDescription(content)
	if (!sendto || sendto == '') {
		throw 'Missing Arguments.'
	} else {
		if (color && !color == '') {
			RespondEmbed.setColor(color)
		}
		if (footer && !footer == '') {
			RespondEmbed.setFooter(footer)
		}
		if (imageurl && !imageurl == '') {
			RespondEmbed.setImage(imageurl)
		}
		sendto.send(RespondEmbed)
	}

}
errorlog = function (error) {
	errorcount = errorcount + 1
	const ErrorReportEmbed = new Discord.MessageEmbed()
	ErrorReportEmbed.setColor('#FF0000')
	ErrorReportEmbed.setTitle('Bot Error')
	ErrorReportEmbed.setDescription(`An error has occurred while the bot running.`)
	ErrorReportEmbed.addFields(
		{ name: 'Error information', value: `${error}`, inline: false },
	)
	ErrorReportEmbed.setTimestamp()
	const ErrorLog = client.channels.cache.get(`${BotLog}`);
	ErrorLog.send(ErrorReportEmbed)
}

//Footer text
const footertexthandling = require('./modules/footertext/footerText.js')
footertexthandling.execute(client)

//Command Files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const allCommandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	if (!command.mod && !safemode == true) {
		client.commands.set(command.name, command);
	}
}
for (const file of allCommandFiles) {
	const modcommand = require(`./commands/${file}`);
	if (safemode == true && modcommand.essential == true) {
		client.modcommands.set(modcommand.name, modcommand);
	} else {
		if (!safemode == true) {
			client.modcommands.set(modcommand.name, modcommand);
		}
	}

}

//Command list
getCommandList = function (modCheck, botManagerCheck, miscCheck, configCheck, botStuffCheck, userID, showMemberCommands) {
	const findCommandListBotStuff = fs.readdirSync('./commands').filter(file => file.startsWith('BOTSTUFF_'));
	const findCommandListMisc = fs.readdirSync('./commands').filter(file => file.startsWith('BOTMISC_'));
	const findCommandListConfig = fs.readdirSync('./commands').filter(file => file.startsWith('BOTCONFIG_'))
	const findCommandListMod = fs.readdirSync('./commands').filter(file => file.startsWith('MOD_'));
	const findCommandListBotManager = fs.readdirSync('./commands').filter(file => file.startsWith('BOTMGR_'));
	const findCommandListStats = fs.readdirSync('./commands').filter(file => file.startsWith('STATS_'));
	const commandListBotStuff = [];
	const commandListMisc = [];
	const commandListConfig = [];
	const commandListMod = [];
	const commandListBotManager = [];
	const commandListStats = [];
	var commandList = []
	var restrictions = require('./restrictions.json')
	var commandEssential = restrictions[2];
	for (const file of findCommandListUser) {
		const command = require(`./commands/${file}`);
		commandListUser.join(' ')
		if (!command.hidden == true || safemode == true) {
			if (safemode == true && commandEssential && commandEssential[command.name] == true) {
				commandListUser.push(command.name)
				console.log(command.name)
			} else {
				if (!safemode == true) {
					commandListUser.push(command.name)
					console.log(command.name)
				}
			}
		}
	}
	if (botStuffCheck == true) {
		for (const file of findCommandListBotStuff) {
			const command = require(`./commands/${file}`);
			commandListBotStuff.join(' ')
			if (!command.hidden == true || safemode == true) {
				if (safemode == true && commandEssential && commandEssential[command.name] == true) {
					commandListBotStuff.push(command.name)
					console.log(command.name)
				} else {
					if (!safemode == true) {
						commandListBotStuff.push(command.name)
						console.log(command.name)
					}
				}
			}
		}
	}
	if (configCheck == true) {
		for (const file of findCommandListConfig) {
			const command = require(`./commands/${file}`);
			commandListConfig.join(' ')
			if (!command.hidden == true || safemode == true) {
				if (safemode == true && commandEssential && commandEssential[command.name] == true) {
					commandListConfig.push(command.name)
					console.log(command.name)
				} else {
					if (!safemode == true) {
						commandListConfig.push(command.name)
						console.log(command.name)
					}
				}
			}
		}
	}
	if (miscCheck == true) {
		for (const file of findCommandListMisc) {
			const command = require(`./commands/${file}`);
			commandListMisc.join(' ')
			if (!command.hidden == true || safemode == true) {
				if (safemode == true && commandEssential && commandEssential[command.name] == true) {
					commandListMisc.push(command.name)
					console.log(command.name)
				} else {
					if (!safemode == true) {
						commandListMisc.push(command.name)
						console.log(command.name)
					}
				}
			}
		}
	}
	if (modCheck == true) {
		for (const file of findCommandListMod) {
			const command = require(`./commands/${file}`);
			if (!command.hidden == true || safemode == true) {
				if (safemode == true && commandEssential && commandEssential[command.name] == true) {
					commandListMod.push(command.name)
					console.log(command.name)
				} else {
					if (!safemode == true) {
						commandListMod.push(command.name)
						console.log(command.name)
					}
				}
			}
		}
	}

	if (botManagerCheck == true) {
		for (const file of findCommandListBotManager) {
			const command = require(`./commands/${file}`);
			commandListBotManager.join(' ')
			if (!command.hidden == true || safemode == true) {
				if (safemode == true && commandEssential && commandEssential[command.name] == true) {
					commandListBotManager.push(command.name)
					console.log(command.name)
				} else {
					if (!safemode == true) {
						commandListBotManager.push(command.name)
						console.log(command.name);

					}
				}
			}
		}
	}
	if (StatCheck == true) {
		for (const file of findCommandListBotStuff) {
			const command = require(`./commands/${file}`);
			commandListStats.join(' ')
			if (!command.hidden == true || safemode == true) {
				if (safemode == true && commandEssential && commandEssential[command.name] == true) {
					commandListStats.push(command.name)
					console.log(command.name)
				} else {
					if (!safemode == true) {
						commandListStats.push(command.name)
						console.log(command.name)
					}
				}
			}
		}
	}

	//Not the best way, but will work on later
	usercommandstring = ['__dm!dm!    User    dm!dm!__']
	modcommandstring = ['__dm!dm!    Mod    dm!dm!__']
	botmanagercommandstring = ['__dm!dm!    Bot Manager    dm!dm!__']
	if (!showMemberCommands == false) {
		commandList.push(usercommandstring)
		commandList.push(commandListUser)
	}
	if (botStuffCheck == true) {
		commandList.push(commandListBotStuff)
	}
	if (configCheck == true) {
		commandList.push(commandListConfig)
	}
	if (miscCheck == true) {
		commandList.push(commandListMisc)
	}
	if (modCheck == true) {
		commandList.push(commandListMod)
	}
	if (botManagerCheck == true) {
		commandList.push(commandListBotManager)
	}
	if (statsCheck == true) {
		commandList.push(commandListStats)
    }
	const newcommandlist = commandList.toString().replace(/,/g, ', ')
	return newcommandlist
}

//Commands
const commandHandler = require('./modules/commandHandling/commandHandling.js')
commandHandler.execute(client)

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

//Eval
const eval = require('./modules/misc/eval.js')
eval.execute(client)

//Below are client emit actions
const clientemit = require('./modules/misc/emitActions.js')
clientemit.execute(client)

client.login(token)