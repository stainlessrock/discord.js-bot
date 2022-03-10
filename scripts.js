const Discord = require('discord.js');
const client = new Discord.Client({ intents: 4609 });

client.on("ready", async () => {
	
  console.log("Welcome to earth Bot!");



});
client.on("messageCreate", async (message) => {

  if (message.content.startsWith("hello"))


    message.reply("hello to you too");


});
client.login("BOT_TOKEN");
