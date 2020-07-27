const discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    

 
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but u cant do that.");
 
      if (!args[0]) return message.reply("Please specify a user.");
 
      if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but i dont have permissions to do this.");
 
      var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 
      if (!mutePerson) return message.reply("Cant find the user.");
 
      if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but u cant mute a staff member..");
 
      var muteRole = message.guild.roles.cache.get('725872313920389190');
 
      if (!muteRole) return message.channel.send("The role muted doesnt exist");

      await (mutePerson.roles.add(muteRole.id));
      message.channel.send(`${mutePerson} Has been muted`);







}





module.exports.help = {
    name: "mute"
}