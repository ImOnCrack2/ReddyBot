const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    const catogoryID = "733364463721513021";

      var userName = message.author.username;
      var userDiscriminator = message.author.descriminator;

      var ticketExists = false;
      message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator){
          ticketExists = true;
          message.reply("You already have a ticket open.")

          return;
        }

      });

      if (ticketExists) return;

      var ticketEmbed = new discord.MessageEmbed()
      .setTitle("Hello " + message.author.username)
      .setDescription("A ticket will be created.")
      .setFooter("© ReddyBot", 'https://imgur.com/a/Clca0Pp')
      .setTimestamp()

      message.channel.send(ticketEmbed)

      message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: "text"}).then(
        (createdChannel) => {
          createdChannel.setParent(catogoryID).then(
            (settedParent) => {

              settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false

              });
              settedParent.updateOverwrite(message.author.id, {
                CREATE_INSTANT_INVITE: false,
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                ATTACH_FILES: true,
                ADD_REACTIONS: true
              });
              settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === "• Support Team"), {
                CREATE_INSTANT_INVITE: false,
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                ATTACH_FILES: true
              });

              var embedParent = new discord.MessageEmbed()
              .setTitle(`Hello ${message.author.username}`)
              .setDescription("Please describe ur problem/bug/question here \n Staff will be with you shortly")
              .setFooter("© ReddyBot", 'https://imgur.com/a/Clca0Pp')
              .setTimestamp()

              settedParent.send(embedParent)
            }
          ).catch(err => {
            message.channel.send("Something went wrong...")

          });
        }
      ).catch(err => {
            message.channel.send("Something went wrong...")

          });



}





module.exports.help = {
    name: "new"
}