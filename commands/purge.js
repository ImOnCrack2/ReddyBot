const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

      const msg = args.join(' '); // Amount of messages which should be deleted

      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but u cant do this.");
 
      if (!args[0]) return message.reply("Give a amount of messages u want to clear.");
 
      if (Number.isInteger(parseInt(args[0]))) {
 
        var aantal = parseInt(args[0]) + 1;
 
        message.channel.bulkDelete(aantal).then(() => {
 
          if (args[0] == 0) {
 
            message.reply(`Are u drunk? I obviously cant delete 0 messages.`).then(msg => msg.delete({timeout: 3000}));
           
            } else if (args[0] == 1) {
           
              message.reply(`I deleted 1 message.`).then(msg => msg.delete({timeout: 3000}));
           
            } else {
           
              message.reply(`i deleted ${args[0]}  messages.`).then(msg => msg.delete({timeout: 3000}));
           
            }
 
        });



}else {
    return message.reply("Please specify a number.");
  }


}


module.exports.help = {
    name: "purge"
}