const Discord = require('discord.js');

module.exports = async (client, message) => {
    
    if (message.author.bot) return;
    let serverlist = client.guilds.cache.array();
    //var server = message.guild.channels.cache;
    const server = message.guild.id;
    if (message.channel.name == "network-userchat") {
        var Sender = client.Networks.get(message.guild.id);
        //Sender = parseInt(Sender);
        for (var i = 0; i < serverlist.length; i++) {
            //get network id of message sender
            var Recipient = client.Networks.get(serverlist[i].id);
            console.log(Recipient);
            //Recipient = parseInt(Recipient);

            console.log(Sender);
            if (Sender == Recipient && serverlist[i].id != message.guild.id) {
                try {
                    var serv = serverlist[i].channels.cache.find(
                        serv => serv.name === "network-userchat"
                    )
                    //console.log(serv)
                    const embed = new Discord.MessageEmbed()
                        //.setThumbnail(message.author.displayAvatarURL())
                        .setFooter(`${message.author.username} : ${message.content}`, message.author.displayAvatarURL())
                    serv.send(embed)
                } catch (err) {
                    console.log(err);

                    break;
                }
            }
        }
    }
    if (!message.content.startsWith(client.config.prefix)) return;


    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    const cmd = client.commands.get(command);

    if (!cmd) return //returns if command doesn't exist

    //NEED TO ADD PROPER USER LEVEL SYSTEM
    
    //owner bypass
    if (message.author.id == client.config.ownerID){
            cmd.run(client, message, args);
            return;
    }
            //if user calling command doesn't have bot owner level permission cancel command 

    if (cmd.config.permLevel == "owner" && message.author.id != client.config.ownerID) return;
    let requiredPerm = cmd.config.permLevel

    //if user isn't admin when needed cancel command
    if (requiredPerm == "admin" && !(message.member.hasPermission("ADMINISTRATOR"))) return;


    try{
       cmd.run(client, message, args);
      
       
       
      
    } catch (err) {
        console.log("unhandled error")
        console.log(err)
            //handles any unhandled errors with commands
    }
}