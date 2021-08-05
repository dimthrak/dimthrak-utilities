module.exports = {
	name: 'isoutage'
	aliases: ['iswebsiteoutage']
	description: 'Displays if there is a website outage'
	usage: ''
	cooldown: 5
	execute(message, args, client) {
		try {
			if ($('outage')) {
				message.channel.send(":red_circle: There is a website outage.")

			} else {
				message.channel.send(":green_circke: The website is OK.")
			}
			return;
		} catch (error) {
			respond('Error', 'Something went wrong.\n' + error + `\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
			errorlog(error)
			// Your code broke (Leave untouched in most cases)
			console.error('an error has occured', error);
		}
	}
}