const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let activeGiveaways = bot.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id);
    let giveaways = activeGiveaways.filter((g) => !g.ended);

    try {
    message.channel.send(`${giveaways.map((g) => `**Prize**: ${g.data.prize} **Hosted By**: ${g.hostedBy.username}\n\n**ID**: ${g.messageID}`).join("\n\n")}`);
  } catch(err) {
    message.channel.send('There are currently no active giveaways in this server.')
  }
}

module.exports.config = {
    name: "list",
    description: "Lists all the active giveaways in the server.",
    usage: "g!list",
    accessableby: "Everyone",
    aliases: []
}
