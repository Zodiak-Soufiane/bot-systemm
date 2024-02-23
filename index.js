const express = require("express");
const app = express();

app.listen(() => console.log("Im Ready To Work..!"));
app.get('/', (req, res) => {
  res.send('<center><h1>California S<h1><p>This Bot Made By Me "Saleh AbedAlkader" for  Thank You ❤️ ! </p><center>')
});

const Discord = require("discord.js")

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 
[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const prefix = "+";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

    
  const {  MessageSelectMenu, MessageActionRow } = require('discord.js');

client.on('messageCreate', async message => {

	if (message.content === prefix + 'setup') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

		await message.channel.send({ content: 'Select a options', components: [row] });
	}
});

client.on("interactionCreate" , interaction => {
  if(!interaction.isSelectMenu()) return;
  if(interaction.values == "first_option") {
    interaction.reply({content:"You select the first option !" , ephemeral : true})
  }
  if(interaction.values == "second_option") {
    interaction.reply({content:"You select the second option !" , ephemeral : true})
  }
});


client.login(process.env.token)