const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    if (args[1]) message.channel.send(message.author.toString() + " has given " + args[1].toString() + " a cookie! :cookie:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
    else message.channel.send("Who do you want to send a cookie to? :cookie: (Correct usage: `cookie @username`)") // sends the error message if no-one is mentioned



}





module.exports.help = {
    name: "cookie"
}