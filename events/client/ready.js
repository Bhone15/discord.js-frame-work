const config = require('../../config.json')
const prefix = config.prefix;
module.exports = (client) => {
     client.user.setActivity(`${prefix}help`);
     console.log(`${client.user.username} ✅`);
}