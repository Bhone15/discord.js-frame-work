const {Collection, Client, Discord} = require('discord.js')
const client = new Client({
     disableEveryone: true
})
const config = require('./config.json')
const token = config.token

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();

["command", "event"].forEach(handler => {
     require(`./handlers/${handler}`)(client);
})

client.login(token);