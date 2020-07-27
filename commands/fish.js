const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    if (args[1]) message.channel.send(args[1] + " is now a fish :blowfish:")

    else message.channel.send("Who do you want to turn into a fish?? :blowfish: (Correct usage: `fish @username`)")




}





module.exports.help = {
    name: "lazy"
}