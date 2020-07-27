const discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    

    const catogoryID = "733364463721513021";

      if(!message.member.hasPermission("MANAGE_CAHNNELS")) return message.reply("Sorry, but u cant close a ticket.")

      if(message.channel.parentID == catogoryID){
        message.channel.delete()


      var embedCreateTicket = new discord.MessageEmbed()
      .setTitle("Ticket " + message.channel.name)
      .setDescription("The ticket has been marked as **completed**")
      .setFooter("© ReddyBot", 'https://imgur.com/a/Clca0Pp')
      .setTimestamp()

      var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "🎫︱ticket-logs")
      if (!ticketChannel) return message.reply("Channel doesnt exist.")

      ticketChannel.send(embedCreateTicket)
      }else {

        message.channel.send("Please use this command in a ticket.")
      }



}





module.exports.help = {
    name: "close"
}