const discord = require("discord.js");


module.exports.run = async (client, message, args) => {


    var helpEmbed = new discord.MessageEmbed()
    .setTitle("Help command :carrot:")
    .setColor(0x00AE86)
    .setDescription(" **User Commands** \n cookie @username - gives a cookie \n fish @username - turns them into a fish \n help - shows this message \n ping - shows ping \n \n **Moderation comands** \n ban - bans a user \n kick - kicks a user \n warn - warns a user \n purge - clears messages \n mute - mutes a user \n unmute - unmutes a user \n \n **Ticket commands** \n new - creates a ticket \n close - closes a ticket ")
   .setFooter("© ReddyBot", 'https://imgur.com/ikXgxTf')
   .setTimestamp()
   message.channel.send(helpEmbed)




}





module.exports.help = {
    name: "help"
}