const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    //giveaway amountPlayer time smth

    var item = "";
    var time;
    var winnerCount;

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Sorry, but u cant use this");


    winnerCount = args[0];
    time = args[1];
    item = args.splice(2,args.length).join(" ");

    
    if(!winnerCount) return message.reply("Please specify a amount of winners");
    if(!time) return message.reply("Please specify a valid time for the giveaway to end");
    if(!item) return message.reply("Please specify a winneritem");

    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 1000));

    var giveawayEmbed = new discord.MessageEmbed()
    .setTitle("🎉 **GIVEAWAY** 🎉")
    .setDescription(`React with 🎉 to enter \n Hosted by: ${message.author}`)
    .setFooter(args[0], `winners | Ends at: ${dateEnd}`);

    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");

    
    setTimeout(function(){

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < peopleReacted.length; i++) {

            if(peopleReacted[i].id == client.user.id) {
                peopleReacted.splice(i,1);
                continue;
            }

        }

        if(peopleReacted.length == 0){
            return message,channel.send("Nobody won, so the bot won instead");
        }


        for (let y = 0; y < winnerCount; y++) {

            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let o = 0; o < winners.length; o++) {

                if(winners[o] == peopleReacted[random]) {
                    inList = true;
                    y--;
                    break;
                }
            }

            if(!inList){
                winners.push(peopleReacted[random]);
            }

        }

        for (let y = 0; y < winners.length; y++) {

            message.channel.send(`Congrats ${winners[y]} You won **${item}** `);
        }






    }, time * 1000)






}





module.exports.help = {
    name: "giveaway"
}