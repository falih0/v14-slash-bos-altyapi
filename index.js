const { Client, GatewayIntentBits, Partials, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js')
const { CommandHandler } = require('djs-commands')
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildMembers,
    ],
    partials: [Partials.GuildMember, Partials.Channel],
  });

const CH = new CommandHandler({
	folder: __dirname + '/commands/',
	globalCommandRefresh: true, //not including this or setting as false reverts to not updating commands.
});
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	let cmd = CH.getCommand(interaction.commandName);
	if (!cmd) return;
	try {
		cmd.run(interaction);
	} catch (e) {
		console.log(e);
	}
});

client.login(process.env.TOKEN)