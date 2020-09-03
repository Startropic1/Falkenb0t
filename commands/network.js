exports.run = (client, message, args) => {
  var ServerCount = 0;
  var Sender = client.Networks.get(message.guild.id)
console.log(Sender)
if(Sender == null){
  message.reply("You are not a part of a network!")
  return
}


 var serverlist = client.guilds.cache.size;


        for (var i = 0; i < serverlist.length; i++) {
            var Recipient = client.Networks.get(serverlist[i]);
            Recipient = parseInt(Recipient);
            if(Sender == Recipient){
              ServerCount++
            } 
         }
        message.channel.send({embed: {
      title: "NETWORK",
      fields: [
                {
                 name:"Network ID",
                 value: Sender.toString()
                },
                {
                name:"Server Count",
                value: ServerCount
                } 
                  ]
    }

    })
}
exports.help = {
 name: "network",
  description: "returns network info (Network id & # of Servers on Network)",
  usage: "N$network"
}
exports.config = {
  permLevel: "admin"
}